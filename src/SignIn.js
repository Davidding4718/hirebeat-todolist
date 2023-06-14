import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // add this state variable to keep track of errors
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
            navigate('/Template');
        } catch (error) {
            console.log('error signing in:', error);
            setError(error.message); // update the error message if sign in fails
        }
    }

    return (
        <div>
            <input placeholder="Username" onChange={event => setUsername(event.target.value)} />
            <input placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={signIn}>Sign In</button>
            {error && <p>{error}</p>} {/* display the error message if there is one */}
        </div>
    );
}

export default SignIn;
