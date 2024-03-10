import {useEffect, useReducer, useState} from "react";
import users from "../data/users.json"
import {GetUsersInitialData, UserReducers} from "../Reducers/user";



const Login =()=>{

    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [loginError,setLoginError]=useState(null);


    const [userState,userDispatch]=useReducer(UserReducers,GetUsersInitialData())
    console.log(userState)

    const loginSubmit=()=>{
        if( username=== null || password===null || username.trim() === ""   || password.trim()=== ""){
            setLoginError("Niste uneli sifru ili korisnicko ime");
            return;
        }

        let FoundUser=false;

        users.forEach((user,index)=>{
            if(user.username === username && user.password===password){
                const date= new Date();
                let  currentTime=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                FoundUser=true;
                setLoginError(null);
                userDispatch({type:"SET_USERNAME", payload:username});
                userDispatch({type:"IS_LOGGED_IN", payload:true});
                userDispatch({type:"TimeOfLogging",payload:currentTime});

            }
        })
        if(!FoundUser){ setLoginError("Nismo nasli korisnika sa tim kredencijalima")}
    }

    useEffect(() => {
        if(userState.isLoggedIn){
           localStorage.setItem("data",JSON.stringify(userState))
        }
    }, [userState]);
    return (
        <>
            { !userState.isLoggedIn && <form>
                <p>{loginError}</p>
                <input onInput={(e) => {
                    setUsername(e.target.value)
                }} type="text" placeholder="enter your username"/>
                <input type="password" onInput={(e) => {
                    setPassword(e.target.value)
                }} placeholder="enter your password"/>
                <button type="button" onClick={loginSubmit}>Login</button>
            </form>}


        </>
    )
}

export default Login;