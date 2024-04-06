import { useEffect, useState } from "react";
import { boolean } from "yup";

export default function Header (){
const size = "24px"
 
const [darkMode, setDarkMode] = useState(undefined)
const switchMode = () =>{
    setDarkMode(!darkMode);
};

useEffect(()=>{

    if (darkMode){
        localStorage.setItem("darkMode", "true");
        window.document.documentElement.classList.add("dark");
    } else if (darkMode === false){
        localStorage.setItem("darkMode", "false");
        window.document.documentElement.classList.remove("dark");
    } else {
        setDarkMode(localStorage.getItem("darkMode") === "true");
    }


}, [darkMode])




    return(
        <div>
        
        <div onClick={switchMode} className="text-2xl bg-white">
       { !darkMode ? <button> 🌞</button>
       :        <button> 🌚</button>
    }
        </div>
        </div>
    )
}