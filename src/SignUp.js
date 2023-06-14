import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
                
            });
            console.log(user);

            // Auto sign-in after sign-up
            try {
                const signInUser = await Auth.signIn(username, password);
                console.log(signInUser);
                navigate('/template');
            } catch (error) {
                console.log('error signing in:', error);
            }

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
        </div>
    );
}

export default SignUp;
