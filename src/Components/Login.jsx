import {useReducer, useState} from "react";
import users from "../data/users.json"
import {InitialUserData, UserReducers} from "../Reducers/user";

const Login =()=>{

    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [loginError,setLoginError]=useState(null);
    // const [isLoggedIn,setIsLoggedIn]=useState(null)
    const [userState,userDispatch]=useReducer(UserReducers,InitialUserData)
    console.log(userState
    )
    const loginSubmit=()=>{
        if( username=== null || password===null || username.trim() === ""   || password.trim()=== ""){
            setLoginError("Niste uneli sifru ili korisnicko ime");
            return;
        }

        let FoundUser=false;

        users.forEach((user,index)=>{
            if(user.username === username && user.password===password){

                FoundUser=true;
                setLoginError(null);
                userDispatch({type:"SET_USERNAME", payload:username})
                userDispatch({type:"IS_LOGGED_IN", payload:true})

            }
        })
        if(!FoundUser){ setLoginError("Nismo nasli korisnika sa tim kredencijalima")}
    }
    return (
        <>
             <form>
                <p>{loginError}</p>
                <input onInput={(e) => {
                    setUsername(e.target.value)
                }} type="text" placeholder="enter your username"/>
                <input type="password" onInput={(e) => {
                    setPassword(e.target.value)
                }} placeholder="enter your password"/>
                <button type="button" onClick={loginSubmit}>Login</button>
            </form>

        </>
    )
}

export default Login;