import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      await Auth.signIn(username, password);
      // On success, redirect or update state as needed
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Log in" />
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
