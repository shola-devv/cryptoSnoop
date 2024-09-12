import { useRouter } from "next/router"
import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import dotenv from 'dotenv';
import Link from "next/link";
import Navbar from '/comps/navbar.js';



dotenv.config();
/*
export const getStaticPaths = async ()=>{

  
    const options = {
      method: 'GET',
      url: 'https://openapiv1.coinstats.app/coins',
      headers: {
        accept: 'application/json',
        'X-API-KEY': process.env.MY_API_KEY
      
      }
     
    };
    const data = await Axios
    .request(options);
    
    console.log(data.data);
    const paths = data.data.result.map((coins)=>{
     
      return {
        params: { id: coins.id.toString() }
      }
    })
      return {
        paths,
        fallback: false
           
        }
      
      
        };
      
        
 
 
 
 */

  export const getStaticPr = async (context)=>{
    try{
      const id = context.params.id;
      const options = {
        method: 'GET',
        url: ('https://openapiv1.coinstats.app/coins/' + id),
        headers: {
          accept: 'application/json',
          'X-API-KEY': process.env.MY_API_KEY
        
        }
       
      };
      const data = await Axios
      .request(options);
      
      console.log(data.data);
        return {
          props: {
             coin : data.data,
           }
             
          }
        }
        catch (error) {
          console.error('Error fetching data:', error);
          return {
            props: {
              coin: null,
            }
          };
        }
    }
    



export default function  Crypto({ coin }){
   
  
  const router = useRouter();
    
   const backButt = ()=>{
           router.push('/cryptos')
           // router.push(-1);
    }
    return(
       
        <div id=''>
             <Head>
      <title>CRYPTO</title>
      <meta keywords='crypto coins,crypto live prices,crypto live stats,crypto live statistics cryptos, cryptocurrencies, bitcoin price, tron price, ethereum markert cap, bitcoin markert cap, bitcoin price change, solana price change, how much is solana, how much is ethereum, how much is tron, how much is 
      doge, markert capitalisaton of crypto, live crypto prices, real time crypto updates'></meta>
    </Head>
    
        
    
        <div className="border border-transparent border-l-4 rounded-lg  text-xl p-8 font-bold">
        <Navbar />
           
            <Image className='rounded-lg animate-bounce mt-8' src={coin.icon} alt={coin.name} height={150} width={150}></Image>
            <div className='flex'><h1 className='p-4  bg-blue-400 pt-8 mb-8 rounded-lg'>name:<h1>{coin.name}</h1></h1>
            <h1 className='p-4  bg-orange-400 rounded-lg m-6'>symbol:<h1>{coin.symbol}</h1></h1></div>
         <div className='flex'>  <h1 className='p-4  bg-blue-400 mb-8 rounded-lg'>coin price: <h1>${coin.price.toLocaleString()}</h1></h1> 
         <h1 className='p-4  bg-orange-400 rounded-lg m-6'>coin markert cap: <h1>{coin.marketCap.toLocaleString()}</h1></h1></div>
     <div className='flex'>  <h1 className='p-4  bg-green-400 rounded-lg mb-8'>price per btc: <h1>{coin.priceBtc.toFixed(10)}</h1></h1>
          <h1 className='p-2  bg-blue-400 rounded-lg m-6'>coin volume: <h1>{coin.volume.toLocaleString()}</h1></h1></div>
         <div className='flex'> <h1 className='p-2  bg-blue-400 rounded-lg mb-8'>available Supply: <h1>{coin.availableSupply.toLocaleString()}</h1></h1>
          <h1 className='p-2  bg-blue-400 rounded-lg m-6'>total supply:<h1>{coin.totalSupply.toLocaleString()}</h1></h1> </div>
          <div className='flex'><h1 className='p-4  bg-green-400 rounded-lg mb-8'>price change in one hour: <h1>{coin.priceChange1h}</h1></h1>
          <h1 className='p-4  bg-green-400 rounded-lg m-6'>price change in one day: <h1> {coin.priceChange1d}</h1></h1></div>
         <div className='flex'> <h1 className='p-4  bg-green-400 rounded-lg mb-8'>price change in one week: <h1> {coin.priceChange1w}</h1></h1>
           <div><Link className='p-4  bg-blue-400 rounded-lg m-8 pl' href={coin.websiteUrl}>visit website</Link></div></div>


        </div>
        
        </div>
    )
}