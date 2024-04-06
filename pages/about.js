import styles from '../styles/about.module.css'
import { useSelector } from "react-redux";
import Navbar from '../comps/navbar.js';
import Link from 'next/link';

// <Navbar />
export default function  About(){

    const user = useSelector((state) => state.user.value)
    return(
        
        <div className={styles.body}>
           
        <h1 className={styles.about}> About the app</h1>
        <div className={styles.story}>
         <p>   &nbsp;  &nbsp; cryptoSnoop is your go to platform for staying updated on the dynamic world of cryptos. whether you are a proffesional or just getting started, this webapp offers you valuable insights and data to make informed decisions.   </p>
         <p>&nbsp;&nbsp;&nbsp;Feautures :</p>
            <ol className={styles.boom}>
            <li>- Real time price updates: stay informed about the prices of major cryptocurrencies including Bitcoin, Ethereum, solana, and more</li>
            <li>- Detailed statistics: dive deep into the performance metrics of each cryptocurrency, including markert capitalization and trading volume.</li>
           <li> - A user-friendly interface: cryptoSnoops user friendly interface makes navigating it a breeze, ensuring a seamless experience for everyone.</li> 
         </ol>
        </div>


        <h1 className={styles.about}> About the developer</h1>
       <div className={styles.story}>
        <p>&nbsp;  &nbsp; Hi there! im  Emmanuel Olushola Fayinminu. With a passion for technology and a keen intrest in the world of cryptos, i embarked on a journey to develop a app that provides users with real-time updates and comprehensive statistics on major cryptocurrencies. </p>
        <p>&nbsp;&nbsp;Reach out to me <Link className='text-blue-500' href='https://x.com/OlusholaEmanuel'>here</Link>.</p>
        </div>
        </div>
    )
}