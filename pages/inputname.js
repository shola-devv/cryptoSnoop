import Button from '../comps/button.js'
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { login } from  '/feautures/name.js'
import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/input.module.css'
import { createStyleRegistry } from 'styled-jsx';


export default function  Name(){

    const [style1, setStyle1] = useState(styles.pic);
    const [style2, setStyle2] = useState(styles.pic);

    const changeName = (event)=>{
        dispatch(login({name: event.target.value}))
    }
    const changePicture1 = ()=>{
        dispatch(login({num: 1 }))
        setStyle1(styles.newstyle);
        setStyle2(styles.pic);

    }
    const changePicture2 = ()=>{
        dispatch(login({num: 0 }));
        setStyle2(styles.newstyle);
        setStyle1(styles.pic);

    }

    const dispatch = useDispatch();
    return(
        <div className={styles.body}>
           
            <div className={styles.seg}>  <h1 className={styles.text}> pick a profile photo</h1>
            <div   onClick={changePicture1}><Image className={style1} src='/pfp2.jpg' alt="pfp" height={100} width={100} ></Image></div>
     <div  onClick={changePicture2}><Image className={style2} src='/pfp1.jpg' alt="pfp" height={100} width={100} ></Image></div>
     
    </div>
    <div className={styles.inputdad}> <h1 className={styles.text}>input your name</h1>
              <input className={styles.input} onChange={changeName}></input>
              </div>
    <Link href='/cryptos'><Button value='continue' /></Link>
    
    </div>
    )
}