import { Auth } from 'aws-amplify';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Template() {
    const navigate = useNavigate();

    const signOut = () => {
        Auth.signOut()
            .then(() => navigate('/signin')) // Navigate back to Sign-In page
            .catch((error) => console.log('error signing out:', error));
    };

    return (
        <div>
            <h1>Hello, world!</h1>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
}

export default Template;
