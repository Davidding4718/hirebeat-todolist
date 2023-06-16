import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
        console.log("SignUp function started");
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
                
            });
            console.log(user);
            // navigate to sign-in page after successful sign-up
            navigate('/confirmsignup');  // Ensure this route exists in your routing configuration

        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <div>
            <input placeholder="Username" onChange={event => setUsername(event.target.value)} />
            <input placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} />
            <input placeholder="Email" onChange={event => setEmail(event.target.value)} />
            <button onClick={signUp}>Sign Up</button>
            <br/>
            <br/>
            <Link to="/signin">Sign In</Link>
        </div>
    );
}

export default SignUp;
