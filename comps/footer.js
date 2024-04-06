import Link from "next/link";
import { useState } from "react";
import styles from '../styles/ham.module.css'
 
export default function Footer(){

  let nD = new Date();
  let realYear = nD.getFullYear();
  const [year, upYear] = useState(realYear);
   return(

<div className={styles.foot}>
  
     
  <p className= {styles.copy}> &copy; {year} cryptosnoop.allrightreserved</p>
          
   </div>
   )
}