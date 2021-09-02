
import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Select from "react-select";
import { userInf } from '../app/reducers/userReducers';
import { withNamespaces } from 'react-i18next';
function Contact(props){
    const userInformation=useSelector(userInf);
    const[user,setUser]=useState(userInformation.user);
    const[alert, setAlert]=useState(false)
    const[form,setForm]=useState({userName:userInformation.user.userName,mail:userInformation.user.mail,phone:'',country:'',wish:''});

    useEffect(()=>{

        setUser(userInformation.user);
    })
    

const  countryList  =  [ 
	{  value : "TR" ,  label : "Turkey"  } , 
	{  value : "US" ,  label : "United States of America"  } , 
	{  value : "GB" ,  label : "Birleşik Krallık"  } , 
	{  value : "DE" ,  label : "Almanya"  } , 
	{  value : "SE" ,  label :"İsveç" } , 
	{  value : "KE" ,  label : "Kenya"  } , 
	{  value : "BR" ,  label : "Brezilya"  } , 
	{  value : "ZW" ,  label : "Zimbabve"  } 
]
const filterOption = (option, inputValue) => {
    const { label, value } = option;
    // looking if other options with same label are matching inputValue
   
    const otherKey = countryList.filter(
        
      (opt) =>{   return opt.label.toLowerCase().includes(inputValue) && opt.value===value} 
    );
   
    return label.toLowerCase().includes(inputValue) || otherKey.length > 0;
  };


return(
<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h3>{props.t('contact_us')}</h3>
   
    <form className="form" onSubmit={(e)=>{console.log(form); console.log(user); e.preventDefault();}} >
        <div className="formContainer">

            <div>
                <input type="text" required={true}   name="userName" defaultValue={user['userName']} onChange={(e)=>{  form['userName']=e.target.value; setForm(form);}} placeholder={props.t('name')}/>
            </div>
            <div>
                <input type="email" required={true}  name="mail" defaultValue={user['mail']} onChange={(e)=>{  form['mail']=e.target.value; setForm(form);}} placeholder={props.t('mail')}/>
            </div>
            <div >
                <input type="number"  
                required={true} 
                name="phone" 
                onChange={(e)=>{
                    
                            
                                if(e.target.value.charAt(0)=='0' && e.target.value.length==11){
                                    setAlert(true);
                                    form['phone']=e.target.value;
                                   setForm(form);
                                
                                }else if(e.target.value.charAt(0)=='5' && e.target.value.length==10){
                                    setAlert(true);
                                    form['phone']=e.target.value;
                                    setForm(form);
                                    
                                }else{
                                    setAlert('Geçerli bir telefon numarası giriniz.');
                                }

                                console.log(alert);
                            }
                        } 
                 placeholder={props.t('phone')}/>
            </div>
         
            <Select onChange={(e)=>{form['country']=e.value; setForm(form);}}  filterOption={filterOption} options={countryList}/>
      
            <div>
                <textarea defaultValue="" onChange={(e)=>{ form['wish']=e.target.value; setForm(form);}}></textarea>
            </div>
            <p style={{color:'red'}}>
            {alert }
            </p>
             { alert===true ? <button>{props.t('send')}</button> : <button disabled>{props.t('send')}</button>} 
             </div>
            </form>
</div>
);




}


export default  withNamespaces()(Contact);