import logo from '../../logo.svg';
import menu from '../../menu.png';
import closeIMG from '../../close.png';
import '../../App.css';
import {
    Link
   } from "react-router-dom";
import Login from './Login';
import Account from './Account';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userLogOut,userInf} from '../app/reducers/userReducers';
import { withNamespaces } from 'react-i18next';
 

 

function Header(props){
    const userInformation = useSelector(userInf);
    const [show,setShow]=useState(false);
    const [account,setAccount]=useState(false);
    const [pages,setPages]=useState('Example.com');
    const [mobile,setMobile]=useState(false);
    const [src,setSrc]=useState(menu);
    const dispatch = useDispatch();
   
    const [user,setUser]=useState(userInformation.user);
  
    const isLogin=(val)=>{
        console.log(userInformation);
        setUser(val);
        props.main(val);
    }
    const logOut=()=>{
        dispatch(userLogOut({userName:'',mail:'',password:'',isLogin:''}));
        setUser({userName:'',mail:'',password:'',isLogin:''});
        setAccount(!account);
    }
   
   const close=(e)=>{
       setShow(false);
        console.log(show);
    }
    const openModal=()=>{
       
        setShow(!show);
    }
    const openAccount=()=>{
        
        setAccount(!account);
    }

    //lang select
    const selectedLanguage = props.i18n.language;
    const langues=[
        {name:"TR", code: "tr"},
        {name:"EN", code: "en"}       
      ]
      const changeLanguage = (lng) => {
        props.i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
      }
   //mobile
   const _mobileHandle=()=>{
    setMobile(!mobile); mobile ? setSrc(menu) :setSrc(closeIMG)
   }
    
return(
<div>  <header className="App-header"> 
<div className="headerContainer" >
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

    <img src={logo} style={{width:40,height:40}} className="App-logo" alt="logo" />
   <h3>{props.t(pages)}</h3>
   </div>
   <div className="navContainer" >
       <a className="linkContainer">
      
      
                <ul className="linkList">
                        <li>
                            <Link to="/" onClick={()=>{setPages('Example.com')}}>{props.t('home')}</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={()=>{setPages('contact')}}>{props.t('contact')}</Link>
                        </li>
                        <li className="linkTitle">
                            {user['userName'] !== "" ? <a  onClick={openAccount}> {user['userName']} </a> : <a  onClick={openModal} style={{cursor:'pointer'}}>{props.t('login')}</a>}
                             
                        {show ? <Login isShow={close} submit={isLogin}/> : "" }

                        {account ?<Account logout={logOut} isShow={openAccount} userInf={user}/> : ""}
                             
                        </li>
                        <li className="langContainer">
                            <a>{selectedLanguage}</a>
                                <ul className="subMenu">
                                    {
                                        langues.map((lang)=>{
                                            return(
                                                <li onClick={()=>{changeLanguage(lang.code);}}>{lang.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                        </li>
                        

                </ul>
               
    
       {/* <img  src={menu}  style={{width:40,height:40,float:'right',cursor:'pointer',}} /> */}
       </a>
   </div>
   <div className="mobileMenu">
       <div className="mobileHeader">
           <img  src={src} onClick={()=>{ _mobileHandle()  }} style={{width:40,height:40,float:'right',cursor:'pointer',}} />
            </div>
            <div className={ mobile ? " mobileContainer mobile-active" : " mobileContainer"}>
            <ul className="linkList">
                        <li>
                            <Link to="/" onClick={()=>{setPages('Example.com'); _mobileHandle() }}>{props.t('home')}</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={()=>{setPages('contact');  _mobileHandle()}}>{props.t('contact')}</Link>
                        </li>
                        <li className="linkTitle">
                            {user['userName'] !== "" ? <a  onClick={openAccount}> {user['userName']} </a> : <a  onClick={openModal} style={{cursor:'pointer'}}>{props.t('login')}</a>}
                             
                        {show ? <Login isShow={close} submit={isLogin}/> : "" }

                        {account ?<Account logout={logOut} isShow={openAccount} userInf={user}/> : ""}
                             
                        </li>
                        <li className="langContainer">
                            <a>{selectedLanguage}</a>
                                <ul className="subMenu">
                                    {
                                        langues.map((lang)=>{
                                            return(
                                                <li onClick={()=>{changeLanguage(lang.code);}}>{lang.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                        </li>
                        

                </ul>
            </div>
   </div>
</div>
</header></div>
);


}


  

export default withNamespaces()(Header);