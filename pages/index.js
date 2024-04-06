import Image from "next/image";
import Link from "next/link";
import Head from "next/head.js";
import Button from '../comps/button.js';
import styles from '../styles/about.module.css';


export default function Home() {
  return (
    <>
     <Head>
      <title>CRYPTOSNOOP</title>
      <meta keyword='crypto coins,crypto live prices,crypto live stats,crypto live statistics cryptos, cryptocurrencies, bitcoin price, tron price, ethereum markert cap, bitcoin markert cap, bitcoin price change, solana price change, how much is solana, how much is ethereum, how much is tron, how much is 
      doge, markert capitalisaton of crypto, live crypto prices, real time crypto updates,coinstats api user,'></meta>
    </Head>
    
    <div className="p-4">
      
      
  
  <h1 className="mt-56 ml-30 text-3xl bold lg:text-5xl sm:text-3xl " >KEEP YOUR EYE ON<span className="hover:text-green-500 "> CRYPTOS</span></h1>

     <Link href='/inputname'> < Button className='p-8' value="Get started"/> </Link>
     <div className={styles.full}><div className="animate-bounce w-16 rounded-lg "><Image src='/doge.png' className= {styles.icon} alt="bitcoin" height={80} width={100} ></Image></div>
     <div className="animate-bounce  rounded-lg "><Image src='/tron.png' alt="doge" className= {styles.icon} height={100} width={80} ></Image></div>
     <div className="animate-bounce  rounded-lg "><Image src='/greeneth.png' alt="greeneth" className= {styles.icon} height={60} width={90} ></Image></div>
     <div className="animate-bounce  rounded-lg "><Image src='/bitcoin.jpeg' alt="solanew" className= {styles.icon} height={160} width={80} ></Image></div>
     <div className="animate-bounce  rounded-lg "><Image src='/solana.jpeg' alt="tron" className= {styles.icon} height={120} width={80} ></Image></div>
     <div className="animate-bounce  rounded-lg "><Image src='/solana.png' alt="solana" className= {styles.icon} height={190} width={90} ></Image></div>
     <div className="rounded-full animate-bounce"><Image src='/shib.png' alt="solana" className= {styles.icon} height={100} width={65} ></Image></div>
     <div className="rounded-full animate-bounce"><Image src='/xrp.png' alt="xrp" className= {styles.icon} height={100} width={65} ></Image></div>
     </div>   
    </div>
    
    </>
  );
}
