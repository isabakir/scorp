import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {userLogin,userInf} from '../app/reducers/userReducers';
import { withNamespaces } from 'react-i18next';
function Login(props){
    const userInformation = useSelector(userInf);
    const[user,setUser]=useState({userName:'',mail:'',password:'',isLogin:''});
    const dispatch = useDispatch();
  
    console.log(userInformation);

    const handleSubmit=(e)=>{
       
        props.isShow();
       
       props.submit(user);
       dispatch(userLogin(user));
      
        e.preventDefault();

    }

    

console.log(props);
    return(
        <div className="LoginModal">
           <form style={{padding:20,backgroundColor:'black'}} onSubmit={handleSubmit}>
            <div>
                <input type="text" required={true}  onChange={(e)=>{  user['userName']=e.target.value; setUser(user);}} placeholder={props.t("name")}/>
            </div>
            <div>
                <input type="email" required={true}  onChange={(e)=>{  user['mail']=e.target.value; setUser(user);}} placeholder={props.t("mail")}/>
            </div>
            <div>
                <input type="password"  required={true} minLength={8} onChange={(e)=>{user['password']=e.target.value; setUser(user);}} placeholder={props.t("password")}/>
            </div>
            <button>{props.t("login")}</button>
            <button onClick={(e)=>{ e.preventDefault(); props.isShow()}}>{props.t("close")}</button>
            </form>
        </div>

    );
}

export default  withNamespaces()(Login);