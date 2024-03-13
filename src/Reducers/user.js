



export const InitialUserData={
            username:null,
            isLoggedIn:null,
            timeOfLogging:null,
}


export const GetUsersInitialData=()=>{
    const userData=localStorage.getItem("data")

    return userData ? JSON.parse(userData):InitialUserData;

}

export const UserReducers =(state,action) =>{
    switch(action.type){
        case "SET_USERNAME":
            return {...state,username:action.payload};
        case "IS_LOGGED_IN":
            return{...state,isLoggedIn:action.payload};
        case "TimeOfLogging":
            return{...state,timeOfLogging:action.payload}
        default:
                return state;
    }

}