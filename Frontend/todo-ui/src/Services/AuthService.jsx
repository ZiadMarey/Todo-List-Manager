import axios from "axios";

const AUTH_REST_API_BASE_URL = 'http://localhost:8080/api/auth'

export const registerAPICall =(registerOb) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerOb);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login',{usernameOrEmail,password})

export const storeToken =(token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser", username);

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    if(username == null){
        return false;
    }else{
        return true; 
    }
}

export const getLoggedInUser = () => {
    const userName = sessionStorage.getItem("authenticatedUser");
    return userName;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();

}