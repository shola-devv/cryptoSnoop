import Link from "next/link"
import styles from '../styles/notfound.module.css'
import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Head from "next/head"

 const Notfound  = ()=>{

  const route = useRouter();
useEffect(()=>{
setTimeout(()=>{
route.push('/')
}, 17000)
}, [])

return (
  <>
   <Head>
      <title>Error 404</title>
      <meta keywords='gbhnm'></meta>
    </Head>
    <div className= {styles.bod}   >
    <span className={styles.emo}>😥😬</span>
  <h1 className={styles.er}>Error 404</h1>
  
  
  <h2 className={styles.pa}>This page could not be found</h2>
  <h2>Go back to the <Link className= "text-blue-400" href="/">Homepage</Link></h2>

    </div>
 </>
)

} 
export default Notfound;