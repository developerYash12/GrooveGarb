import { useState } from "react"
import "./login.css"
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Signup() {

    const [userDetails, setUserDetails] = useState({ email: "", password: "", firstName: "", lastName: "" });
    const { signupHandler } = useAuth();

    const inputHandler = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        })
    }

    const signupSubmitHandler = (e) => {
        e.preventDefault();
        signupHandler(userDetails);
    }
    const navigate = useNavigate()

    return (
        <>
            <h2>Signup Form</h2>

            <form onSubmit={signupSubmitHandler}>
                <div className="imgcontainer">
                    <img src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" style={{ width: '20%' }} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label for="uname"><b>First Name</b></label>
                    <input onChange={inputHandler}
                        type="text" placeholder="Enter FirstName" name="firstname" />
                    <label for="uname"><b>Last Name</b></label>
                    <input onChange={inputHandler}
                        type="text" placeholder="Enter LastName" name="lastName" />
                    <label for="uname"><b>Email</b></label>
                    <input onChange={inputHandler}
                        type="text" placeholder="Enter Email" name="email" />

                    <label for="psw"><b>Password</b></label>
                    <input onChange={inputHandler}
                        type="password" placeholder="Enter Password" name="password" />

                    <button type="submit">Signup</button>
                    <span className="psw" onClick={() => navigate('/login')}>Allready have account &gt;</span>

                </div>
            </form>
        </>
    )
}