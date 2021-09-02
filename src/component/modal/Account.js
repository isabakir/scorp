import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {userInf} from '../app/reducers/userReducers';

function Account(props){
   
   
    const userInformation = useSelector(userInf);
    const[user,setUser]=useState(userInformation.user);
    
    


    return(
        <div className="accountModal">
            
            <div>
                <label>Name: {user['userName']}</label>
            </div>
            <div>
                 <label>Mail: {user['mail']}</label>
            </div>
           
            
            <button onClick={(e)=>{ e.preventDefault(); props.logout();   setUser({userName:'',mail:'',password:'',isLogin:''});}}>Log Out</button>
            
        </div>

    );
}

export default Account;