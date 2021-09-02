
import './App.css';



import Header from './component/modal/Header';
import {Route} from "react-router-dom";


import Home from './component/pages/Home';
import Footer from './component/modal/Footer';
import Contact from './component/pages/Contact';
import {  useState } from 'react';
import './i18n';


function App() {
  const[user, setuser]=useState({username:'',mail:'',password:'',isLogin:''});
  

  const mainState=(val)=>{
    setuser(val)

  }
  
  return (
 
    <div className="App">
    
       
       <Header main={mainState}  />
   
      <Route path="/" exact component={Home}/>
    
      <Route path="/contact" userInf={user} component={Contact}/>
     
      <Footer/>
    </div>
   
  );
}

export default App;
