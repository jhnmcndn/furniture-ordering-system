import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from "react";
import Header from "./components/header";
import Home from "./pages/home"
import Shop from "./pages/shop"
import Product from "./pages/product"
import About from "./pages/about"
import axios from 'axios'
import {ShoppingCartProvider} from "./context/ShoppingCartContext";

function App() {
   const [datas, setDatas] = useState([])
   useEffect(() => {
      axios.get('http://localhost:5000/posts').then(response => {
         console.log(response.data, 'data');
         setDatas(response.data)
      }).catch(error => {
         console.log(error);
      });
   }, [])
   console.log(datas, '123123')
   return (
         <ShoppingCartProvider>
            <Header/>
            <Routes>
               <Route path="/" element={<Home propData={datas}/>}/>
               <Route path="/shop" element={<Shop/>}/>
               <Route path="/product" element={<Product/>}/>
               <Route path="/about" element={<About/>}/>
            </Routes>
         </ShoppingCartProvider>
   )
}

export default App