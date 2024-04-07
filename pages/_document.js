import { Html, Head, Main, NextScript } from "next/document";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "/feautures/name.js"  
import { useEffect } from "react";
import { useState } from "react";
import { boolean } from "yup";


const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
export default function Document() {

  let [change, setChange ] = useState(boolean)
  useEffect(()=>{
    let goo = localStorage.getItem("darkMode"); 
     setChange(goo)
   }, [])
   
     
  return (
    <Provider store={store}>
  <Html className={change === "true" ? "dark" : "light"} >
      <Head />
      <body className="dark:bg-slate-950  dark:text-white">
      
        <Main />
       
        <NextScript />
      </body>
    </Html>
    </Provider>
  );
}
