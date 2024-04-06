
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/ham.module.css';

 const Ham = ()=>{
 const [ show, upShow]= useState(false);
    const change =()=>{
        upShow(!show);
    }
return (
 <div className={styles.div} onClick={()=>{change()} }>
    
    <p className={styles.line}> </p>
    <p className={styles.line}> </p>
    <p className={styles.line}> </p>


{show ?  <div>
    <ul className={styles.font}>
       <Link href='/'> <li className={styles.fo}>   Home</li></Link>
       <Link href='/inputname'> <li className={styles.fo}>GetStarted</li></Link>
       <Link href='/about'> <li className={styles.fo}>About</li></Link>
        
    </ul>
 </div> : ''}
 </div>
    )
}

export default Ham