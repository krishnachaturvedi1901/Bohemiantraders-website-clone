import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  test: undefined,
  title: "",
  products: [], // Storing all products
  filteredProducts: [],
  filters: {
    sizes: [],
    price: {
      min: 0,
      max: Infinity,
    },
    other: {
      inStock: false,
    },
  },
  sortOption: "",
  view: "product",
};

let filteredProductsBeforeSort = [];
let productsBeforeSort = [];

export const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      productsBeforeSort = action.payload.products;
    },
    showDetails: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
      state.title = action.payload.title;
    },
    filterReset: (state) => {
      state.filters = initialState.filters;
    },
    addSize: (state, action) => {
      state.filters.sizes = state.filters.sizes.concat(action.payload.size);
    },
    removeSize: (state, action) => {
      const sizes = state.filters.sizes; // Store all selected size for filter
      const i = sizes.indexOf(action.payload.size); // Index of size to remove
      sizes.splice(i, 1); // Remove size
      state.filters.sizes = sizes;
    },
    resetSize: (state) => {
      state.filters.sizes = initialState.filters.sizes;
    },
    setMinPrice: (state, action) => {
      state.filters.price.min = +action.payload.minPrice;
    },
    setMaxPrice: (state, action) => {
      state.filters.price.max = +action.payload.maxPrice;
    },
    justInStock: (state, action) => {
      state.filters.other.inStock = action.payload.inStock;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload.sortOption;
    },
    viewType: (state, action) => {
      state.view = action.payload.view;
    },
    runSizeFilter: (state) => {
      const sizeFiltered = []; // temporary variable for storing filtered product by size
      // Check to no filter run before
      if (state.filteredProducts.length === 0) {
        // Check for at least one size selected
        if (state.filters.sizes.length !== 0) {
          let filterIndex = new Set(); // variable for all index of products that have a special size
          // Map through all selected size
          state.filters.sizes.map((filterSize) => {
            // Loop through all products
            for (let [index, product] of state.products.entries()) {
              // Loop through all size of a product
              product.sizes.map((size) => {
                if (filterSize.toUpperCase() === size.name) {
                  filterIndex.add(index); // Add index of product
                }
              });
            }
          });
          // Loop through all product indexes that has selected sizes
          filterIndex.forEach((index) => {
            state.filteredProducts.push(state.products[index]);
            filteredProductsBeforeSort = state.filteredProducts;
          });
        }
        // If no size selected return no filter product to use all products in page
        else {
          state.filteredProducts = [];
          filteredProductsBeforeSort = state.products;
        }
      }
      // If any filter run before
      else {
        // Check for at least one size selected
        if (state.filters.sizes.length !== 0) {
          let filterIndex = new Set(); // variable for all index of products that have a special size
          // Map through all selected size
          state.filters.sizes.map((filterSize) => {
            // Loop through all products
            for (let [index, product] of state.filteredProducts.entries()) {
              // Loop through all size of a product
              product.sizes.map((size) => {
                if (filterSize.toUpperCase() === size.name) {
                  filterIndex.add(index); // Add index of product
                }
              });
            }
          });
          // Loop through all product indexes that has selected sizes
          filterIndex.forEach((index) => {
            sizeFiltered.push(state.filteredProducts[index]);
          });
          state.filteredProducts = sizeFiltered;
          filteredProductsBeforeSort = state.filteredProducts;
        }
        // If no size selected return no filter product to use all products in page
        else {
          state.filteredProducts = [];
          filteredProductsBeforeSort = state.products;
        }
      }
    },
    runPriceFilter: (state) => {
      const priceFiltered = []; // temporary variable for storing filtered product by price
      // Check to no filter run before
      if (state.filteredProducts.length === 0) {
        // Loop through all products
        state.products.map((product) => {
          // Check if price is in selected range
          if (
            product.price > state.filters.price.min &&
            product.price < state.filters.price.max
          ) {
            state.filteredProducts.push(product);
          }
          filteredProductsBeforeSort = state.filteredProducts;
        });
      }
      // If any filter run before
      else {
        // Loop through all filtered products
        state.filteredProducts.map((product) => {
          // Check if price is in selected range
          if (
            product.price > state.filters.price.min &&
            product.price < state.filters.price.max
          ) {
            priceFiltered.push(product);
          }
        });
        state.filteredProducts = priceFiltered;
        filteredProductsBeforeSort = state.filteredProducts;
      }
    },
    sort: (state) => {
      // If no sort option being selected
      if (state.sortOption === "") {
        state.products = productsBeforeSort;
        state.filteredProducts = filteredProductsBeforeSort;
      }
      // If a sort option selected
      else {
        if (state.sortOption === "PRICE: ASCENDING") {
          // Check to no filter run before
          if (state.filteredProducts.length === 0) {
            state.filteredProducts = state.products.sort(
              (a, b) => a.price - b.price
            );
          }
          // If any filter run before
          else {
            state.filteredProducts.sort((a, b) => a.price - b.price);
          }
        } else if (state.sortOption === "PRICE: DESCENDING") {
          // Check to no filter run before
          if (state.filteredProducts.length === 0) {
            state.filteredProducts = state.products.sort(
              (a, b) => b.price - a.price
            );
          }
          // If any filter run before
          else {
            state.filteredProducts.sort((a, b) => b.price - a.price);
          }
        }
      }
    },
  },
});

export const {
  showDetails,
  addSize,
  removeSize,
  filterReset,
  resetSize,
  setMinPrice,
  setMaxPrice,
  justInStock,
  setSortOption,
  viewType,
  runSizeFilter,
  setProducts,
  runPriceFilter,
  sort,
} = productsPageSlice.actions;

export default productsPageSlice.reducer;
