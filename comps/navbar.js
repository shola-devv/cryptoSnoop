 import Link from "next/link"
 import { useState } from "react"
 import Image from "next/image"
 import { useSelector } from "react-redux";
 import styles from '../styles/navbar.module.css'


 export default function Navbar(){
  const user = useSelector((state) => state.user.value)
  const numb = user.num
  return(
 
        <div>

<div className={styles.body}>
       
<div > { numb ? <div><Image src='/pfp2.jpg' className={styles.pic} alt="pfp" height={60} width={60} ></Image></div>
     :
     <div><Image src='/pfp1.jpg' className={styles.pic} alt="pfp" height={60} width={60} ></Image></div> } </div>
           <h1> welcome  {user.name}</h1> 
          
            </div>
            </div>
    )
 }