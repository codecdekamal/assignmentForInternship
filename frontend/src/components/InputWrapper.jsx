import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios, { AxiosHeaders } from 'axios'
import Wrapper from './Wrapper'
import { ToastContainer, toast } from 'react-toastify';
const InputWrapper = ({checking}) => {
  const notify = () => toast("Successfully Authenticated");

  const [warning,setWarning] = useState(false);
  const [authInfo,setAutoInfo] = useState({
    name:"",password:"",email:"",specialization:""
  })
const onChangeHandler = (e)=>{
  let {name,value} = e.target;
   setAutoInfo({...authInfo,[name]:value})
}
const onSubmitHandler =async (e)=>{
  e.preventDefault()

  if(!authInfo.name || !authInfo.password || !authInfo.email || !authInfo.specialization){
    return setWarning(true)
  }
  console.log(authInfo)
  notify()

  const postingData = async() =>{
    const resp = await axios.post('http://localhost:3000/api/v1/auth/',authInfo)
    console.log(resp)
    if(resp.status===201){
      localStorage.setItem("token",JSON.stringify(resp.data)
      );
        checking()
        return resp.data;
    }
    else{
      notify("Something went wrong")
    }
  }
  setTimeout(() => {
    postingData();
  }, 2000);
} 
  return (
    <>
        <ToastContainer />
        <article className='text-pretty w-screen mt-4 mb-3  md:mb-3 '>
             {warning && <Wrapper color="red">Please provide all Credential!</Wrapper>}

       <form onSubmit={onSubmitHandler} className='py-4 w-5/6 flex flex-col justify-center content-center mx-auto bg-gray-400  text-center rounded-2xl '>
         <Input label="name" type="text" value={authInfo.name} onChange={onChangeHandler}/>
         <Input label="email" type="email" value={authInfo.email} onChange={onChangeHandler}/>
         <Input label="password" type="text" value={authInfo.password} onChange={onChangeHandler}/>
         <Input label="specialization" type="text" value={authInfo.specialization} onChange={onChangeHandler}/>
         <Button submit="submit" />     
       </form>
    </article>
    </>
  )
}

export default InputWrapper
