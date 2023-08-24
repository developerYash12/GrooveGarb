import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-hot-toast";

export const AuthContext = createContext()

export function AuthProvider({ children }){

    const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"))
    const [ currentUser,setCurrentUser ] = useState(localStorageToken?.user);
    const [ token,setToken ] = useState(localStorageToken?.token);
    const navigate = useNavigate();

    const loginHandler =async({ email,password })=>{
        try{
            const res = await axios.post("/api/auth/login",{
                email,
                password,
            });
            console.log(res);
            const { status, data:{ foundUser, encodedToken }} = res;
            if( status === 200){
                localStorage.setItem("loginDetails",
                JSON.stringify({ user:foundUser, token: encodedToken }));
                setCurrentUser(foundUser);
                setToken(encodedToken);
                navigate("/");
                toast.success("Successfully logged in!");

            }
        }
        catch(e){
            console.error(e);
            toast.error("Unable to login!")
        }
    }

    const signupHandler =async({ email,password,firstName,lastName })=>{
        try{
            const res = await axios.post("/api/auth/signup",{
                email,
                password,
                firstName,
                lastName,
            });
            console.log(res);
            const { status, data:{ createdUser, encodedToken }} = res;
            if( status === 201){
                localStorage.setItem("loginDetails",
                JSON.stringify({ user:createdUser, token: encodedToken }));
                setCurrentUser(createdUser);
                setToken(encodedToken);
                navigate("/");
                toast.success("Successfully signed up!");
            }
        }
        catch(e){
            console.error(e);
            toast.error("Unable to signup!")
        }
    }

    const logoutHandler = () => {
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("loginDetails");
        navigate("/Login");
        toast.success("Successfully Loged Out!");
      };

    return(
        <AuthContext.Provider value={{
            loginHandler,
            signupHandler,
            logoutHandler,
            currentUser,
            token
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext); 