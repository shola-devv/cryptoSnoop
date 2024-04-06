import { useSelector } from "react-redux";
import Button from '../comps/button.js'



export default function  Pic(){
    const user = useSelector((state)=> {state.user.value})
    console.log(user.name)
    return(
        <div >
            <h1>{user.name}</h1>

           <Button value='continue' /> 
        </div>
    )
}