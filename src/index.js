import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {store} from "./Redux/store"
import ImageViewContextProvider from './Context/ImageViewContextProvider/ImageViewContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
    <ImageViewContextProvider>
         <App />
    </ImageViewContextProvider>
    </ChakraProvider>
    </BrowserRouter>
    </Provider>


);

