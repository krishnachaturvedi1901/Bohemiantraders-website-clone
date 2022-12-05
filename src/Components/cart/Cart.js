import React, { useEffect, useState } from "react";
//import {ChangeSizeModal} from "./changeSizeModal/ChangeSizeModal.js" 
import { Link } from "react-router-dom";

// Styles
import styles from "./Cart.module.css";

// Assets
import downArrow from "../../assets/down-chevron-svgrepo-com.svg"
import upArrow from "../../assets/chevron-up.svg";
import cross from "../../assets/x.svg";
import zip from "../../assets/zip-button-wht.svg";
import paypal from "../../assets/paypal.svg";
import gPay from "../../assets/dark_gpay.svg";
import { useAccordion } from "@chakra-ui/react";

// Modals


const Cart = () => {
  // Get data from redux store

 const [totalPrice, setTotalPrice]=useState(0);
 const [cart, setCart]=useState([]);
 const [count, setCount]=useState(0);

  const tax = (totalPrice * 0.091).toFixed(2);


  // set state from showing Change Size Modal
  const [showChange, setShowChange] = useState(false);

  // set new size in Change Size Modal
  const [selectedSizeForChange, setSelectedSizeForChange] = useState();

  // Set page Title
  useEffect(() => {
    document.title = "Bohemian Traders - Shopping Cart";
  }, []);

  // Disable scorlling backgronf when Modal is active
  if (showChange) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  // When cart is empty this content will be shown

const fetchdata=()=>{
  fetch("http://localhost:3002/accounts")
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data[0].cart);
    setCart(data[0].cart)

  })
}
useEffect(()=>{
   fetchdata();
},[])



  if (cart.length === 0) {
    return (
      <>
        <div className={styles.container}>
          {/* user location in site */}
          <p className={styles.location}>
            <Link to="/">HOME</Link> / YOUR CART
          </p>
          <h1 className={styles.header}>YOUR CART ({cart.length} ITEMS)</h1>
          <h3 className={styles.empty}>Your cart is empty</h3>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      {/* use location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / YOUR CART
      </p>
      {/* number of items in cart */}
      <h1 className={styles.header}>YOUR CART ({cart.length} ITEMS)</h1>

      {/* product info */}
      {cart.map((product) => (
        <div
          className={styles.productContainer}
          key={`${product.id}${product.id}`}
        >
          <div className={styles.firstSection}>
            <p className={styles.title}>Item</p>
            <div className={styles.innerFirstSection}>
              <div className={styles.photoContainer}>
                <img src={product.img.item1} alt="product" />
              </div>
              <div className={styles.titleContainer}>
                <p className={styles.brandName}>Boheamian Traders</p>
                <Link
                  
                  onClick={() => {
                    
                  }}
                >
                  {product.name}
                </Link>
                <p className={styles.size}>
                  Size: <span>{product.sizes[1]}</span>
                </p>
                <button
                  className={styles.change}
                  onClick={() => {
                    
                  }}
                >
                  CHANGE
                </button>
                {/* <ChangeSizeModal
                  // give modal show modal status
                  show={showChange}
                  // give modal close modal function
                  onClose={() => setShowChange(false)}
                  // give modal all available size
                  allSize={product.allSize}
                  // give modal product name
                  name={product.name}
                  // give modal select size function to change size style
                  onChangeSize={(size) => {
                    dispatch(selectSize({ size: size }));
                  }}
                  // give modal dispatch function for save changed size in redux store
                  onSave={() => {
                    dispatch(
                      changeSize({
                        id: product.id,
                        prevSize: selectedSizeForChange,
                        newSize: selectedSize,
                        quantity: product.quantity,
                      })
                    );
                  }}
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.innerSection}>
            {/* product price */}
            <div className={styles.secondSection}>
              <p className={styles.title}>Price</p>
              <p className={styles.price}>
                $<span className={styles.us}>US</span> {product.price}
              </p>
            </div>
            {/* product quantity */}
            <div className={styles.thirdSection}>
              <p className={styles.title} id={styles.quantityTitle}>
                Quantity<span className={styles.quantitySemiColon}>:</span>
              </p>
              <div className={styles.quantityContainer}>
                <div className={styles.quantityInnerContainer}>
                  <button
                    className={styles.quantityBtn}
                    // decrease or remove product
                    onClick={() => {
                      
                    }}
                  >
                    <img src={downArrow} alt="decrease" />
                  </button>
                  <p className={styles.quantitySmall}>{/* {product.quantity} */} 1</p>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => {
                      // increase product quantity
                     
                    }}
                  >
                    <img src={upArrow} alt="increase" />
                  </button>
                </div>
                <p className={styles.quantityMedium}>{product.id -product.id +1 } </p>
              </div>
            </div>
            <div className={styles.forthSection}>
              <p className={styles.title}>Total</p>
              <div>
                <p className={styles.totalPrice}>
                  $<span className={styles.us}>US</span>{" "}
                  {product.price * 1}
                </p>
                <img
                  className={styles.cross}
                  src={cross}
                  alt="delete"
                  onClick={() => {
                    // remove product from cart
                    
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* total cart info */}
      <div className={styles.checkoutContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SUBTOTAL:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {totalPrice.toFixed(2)}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SHIPPING:</p>
          <div>
            <button className={styles.change}>ADD INFO</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>TAX:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {tax}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>COUPON CODE:</p>
          <div>
            <button className={styles.change}>ADD COUPON</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>GRAND TOTAL:</p>
          <p className={styles.grandTotal}>
            $<span className={styles.us}>US</span>{" "}
            {(+totalPrice + +tax).toFixed(2)}
          </p>
        </div>
        {/* payment options */}
        <div className={styles.zip}>
          <p>ZIP IT NOW, PAY LATER</p>
          <img src={zip} alt="zip" />
          <p>&#9432;</p>
        </div>
        <Link to="/checkout">
        <button className={styles.checkoutBtn}>
          
          CHECK OUT
          
          </button>
          </Link>
        <p className={styles.use}>-- or use --</p>
        <div className={styles.paypal}>
          <img src={paypal} alt="paypal" />
        </div>
        <div className={styles.gPay}>
          <img src={gPay} alt="g-pay" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
