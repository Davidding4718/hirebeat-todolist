import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

function ConfirmSignUp() {
    const [username, setUsername] = useState("");
    const [authCode, setAuthCode] = useState("");
    const navigate = useNavigate();

    const confirmSignUp = async () => {
        try {
            await Auth.confirmSignUp(username, authCode);
            console.log('Code confirmed successfully');
            navigate('/SignIn'); // Navigate to Template page after successful confirmation
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <div>
            <input placeholder="Username" onChange={event => setUsername(event.target.value)} />
            <input placeholder="Authentication Code" onChange={event => setAuthCode(event.target.value)} />
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
    );
}

export default ConfirmSignUp;
