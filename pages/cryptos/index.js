
import Axios from 'axios';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import dotenv from 'dotenv';
import Navbar from '/comps/navbar.js';


/*export const getStaticProps = async ()=>{
const options = {
    method:'GET',
    url:  'https://openapiv1.coinstats.app/coins',
    headers:{
      accept: 'application/json',
      'X-API-KEY': nothing to see here..heres a chuck norris joke though...chuck norris dosent see himself in a mirror,the mirror sees itself in chuk norris.;
    }
  }
   const data = await Axios.request(options).then((res)=>console.log(res));
   
   const coins =  data;
   console.log(9)
  
   return {
props: { 
   data : data
}
 }
}

*/
dotenv.config();

export const getServerSideProps = async ()=>{
try{
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
    return {
      props: {
         cryptop : data.data,
       }
         
      }
    }
    catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          cryptop: null, 
    }
      };
    }
}


const cryptos = ({ cryptop })=>{
    console.log(cryptop)
    
// let highSailers = cryptos.coins.filter((dat) => dat.price > 500) dat.price ) 
// let commers = cryptos.coins.filter((dat) dat.)
// let keepEyeon = cryptos.coins.filter((dat) dat.)
// increaseFast = cryptos.coins.filter(())


// price shortener function
const pshort = (number)=>{

 let nom =  number.toFixed(8);
   return nom;
 }
//let highSailers = data.coins.filter((dat) => dat.price > 500 );
//let lows = data.coins.filter((dat) => dat.price < 500 );
return(
    <div className='pt-12'>
 <Head>
      <title>CRYPTOS</title>
      <meta keywords='crypto coins,crypto live prices,crypto live stats,crypto live statistics cryptos, cryptocurrencies, bitcoin price, tron price, ethereum markert cap, bitcoin markert cap, bitcoin price change, solana price change, how much is solana, how much is ethereum, how much is tron, how much is 
      doge, markert capitalisaton of crypto, live crypto prices, real time crypto updates, coinstats api user'></meta>
    </Head>
    <Navbar />
    
<div>
  {cryptop.result.map((coin) =>{
  return <Link href={'/cryptos/' + coin.id} key={coin.id}><div  className='border border-transparent border-l-4 hover:border-l hover:border-orange-500 mb-4 text-2xl hover:borderl-orange-500 font-bold flex'>
    <Image className='p-6' src={coin.icon} alt={coin.name} height={100} width={100}></Image>
   <h1 className='p-4 bg-orange-400 rounded-lg'>{coin.name}</h1>
   <h1 className='p-4  bg-blue-400 rounded-lg'>{coin.symbol}</h1>
   <h1 className='p-4  bg-green-400 rounded-lg'>price: ${coin.price.toLocaleString()}</h1>
  </div></Link>
  })}
</div>
</div>
)
}
export default cryptos