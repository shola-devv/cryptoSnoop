import Header from './header.js';
import footer from './footer.js'
import Footer from './footer.js';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from '/feautures/name.js'  

const store = configureStore({
    reducer: {
      user: userReducer,
    },
  })
const Lay = ({ children })=>{
return(
<>
<Provider store={store}>

<Header />
{ children }
<Footer />
</Provider>
</>
)

}

export default Lay