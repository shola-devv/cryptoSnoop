import styles from '../styles/button.module.css'

 const Button = (props)=>{
return(<>
<div className={styles.div}>
<button className={styles.button}><p className='text-1.5xl'>{props.value}</p></button>
</div>
</>)
} 


export default Button