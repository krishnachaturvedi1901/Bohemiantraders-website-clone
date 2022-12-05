import logo from './logo.svg';
import './App.css';
import Cart from './Components/cart/Cart';


import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Home1";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer/>
   </div>
  );
}

export default App;
