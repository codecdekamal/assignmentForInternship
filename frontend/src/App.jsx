import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Icon from "./components/Icon";
import InputWrapper from "./components/InputWrapper";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
function App() {
  // taking the token from localStorage
  const [showSignOut, setshowSignOut] = useState(false);
  const {name,email,token,specialization} = JSON.parse(localStorage.getItem("token")) || {}
  const [userInfo,setUserInfo] = useState({
    name:name,email:email,token:token,specialization:specialization
  });
  const checkingData =()=>{
    const {name,email,token,specialization} = JSON.parse(localStorage.getItem("token"))
       setUserInfo({...userInfo,name,email,token,specialization})
       setshowSignOut(true)
  }
  const onClickHandler = () =>{
    localStorage.removeItem("token");
    setUserInfo({name:"",email:"",token:"",specialization:""})
  }
  useEffect(()=>{

  },[])
  return (
    <>
      <Header heading="text assignment" token={token} onClick={onClickHandler} showSignOutButton = {showSignOut}/>
      <Wrapper color="yellow">
        Hello, My name is {userInfo.name?userInfo.name:"___"} . I specialize in {userInfo.specialization?userInfo.specialization:"___"} as following and this is my test
        submission.
      </Wrapper>
      <Icon />
     {!userInfo.token && <InputWrapper checking ={checkingData} />} 
     {token && <Wrapper color="yellow">
       Welcome back ! You will see dash being filled with name and specialization.Also,the signout button pops off.
      </Wrapper>}
    </>
  );
}

export default App;
