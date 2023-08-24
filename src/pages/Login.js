import { useState } from "react"
import "./login.css"
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Login() {

    const [userDetails, setUserDetails] = useState({ email: "", password: "" });
    const { loginHandler, token } = useAuth();

    const guestUser = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
    }

    const inputHandler = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        })
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        loginHandler(userDetails);
    }
    const navigate = useNavigate()

    return (
        <>

            <form onSubmit={loginSubmitHandler}>
                <div className="imgcontainer">
                    <img src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" style={{ width: '20%' }} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label for="uname"><b>Email</b></label>
                    <input onChange={inputHandler}
                        type="text" placeholder="Enter Email" name="email" />

                    <label for="psw"><b>Password</b></label>
                    <input onChange={inputHandler}
                        type="password" placeholder="Enter Password" name="password" />

                    <button type='submit' disabled={token && true}>Login</button>
                    <button onClick={() => setUserDetails(guestUser)}>Login as Guest</button>
                    <span className="psw" onClick={() => navigate('/signup')}>Create new account &gt;</span>
                </div>


            </form>
            <Footer/>
        </>
    )
}