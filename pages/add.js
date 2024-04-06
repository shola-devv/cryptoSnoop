import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./feautures/name.js";
import Pic from "./inputpic.js"


export default function Moo() {

  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  })
  // {localStorage.getItem("darkMode") === "true" ? "dark" : "light"}
  return (

    
      <Provider store={store}> <Pic /> </Provider>
      
      
);}

