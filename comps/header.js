import { useEffect, useState } from "react";
import { boolean } from "yup";
import Ham from './hamburger.js'
import Image from "next/image.js";
import styles from '../styles/header.module.css'


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
        <div >
            <nav>
        <div >
            <div className={styles.nav}>
            <div className="hover:animate-bounce "><Image src='/logo.png' alt="logo" height={150} width={100} ></Image></div>
            <div className={styles.lett}><p>cryptoSnoop</p></div>
        
            <div className={styles.div}>
        <Ham /> </div>
        <div   onClick={switchMode} className="text-2xl">
       { !darkMode ? <button> 🌞</button>
       :        <button>🌚</button>
    }
        </div>
        </div>
        </div>
        </nav>
        </div>
        
    )
}