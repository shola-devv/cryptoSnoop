import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./feautures/name.js"  
import { useEffect } from "react";
import Lay from '../comps/layout.js'



export default function App({ Component, pageProps }) {


  // {localStorage.getItem("darkMode") === "true" ? "dark" : "light"}
  return (
  <Lay>
    <Component {...pageProps} />
    </Lay>
)}

