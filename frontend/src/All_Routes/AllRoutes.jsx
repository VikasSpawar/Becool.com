import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Pages/Cart/Cart";
import Home from "../Components/Pages/Home/Home";
import ProductList from "../Components/Pages/Mens/ProductList";
import SingleProductPage from "../Components/Pages/Mens/SingelProductPage"
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" 
      element={<ChakraProvider> <Home /></ChakraProvider>}></Route>
      <Route path="/mens"  element={

        <ChakraProvider>
          <ProductList/>
        </ChakraProvider>
    
    }></Route>
    <Route path="mens/p/:id"  element={
      <ChakraProvider>
        <SingleProductPage/>
      </ChakraProvider>
    }/>
      <Route path="/womens" ></Route>
      <Route path="/mobiles"></Route>
      <Route path="/carts" element={<Cart/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
