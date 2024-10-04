import Link from "next/link";
import { useState } from "react";
import styles from '../styles/ham.module.css'
 
export default function Footer(){

  let nD = new Date();
  let realYear = nD.getFullYear();
  const [year, upYear] = useState(realYear);
   return(

<div className={styles.foot}>
  
     <div className='pt-96 pl-60'>
  <p className= ''> &copy; {year} cryptosnoop.allrightreserved</p>
  </div>  
   </div>
   )
}