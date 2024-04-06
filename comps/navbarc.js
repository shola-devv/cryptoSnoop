import Link from "next/link"
 
 
export default function Navbar(){
   return(
       <div>

<div className="">
          <Link href="/">HOME</Link>
           </div>  
           <div className="">
          <Link href="/">GET STARTED</Link>
           </div> 
             <div className="">
          <Link href="/">ABOUT</Link>
           </div>
           
           
   </div>
   )
}