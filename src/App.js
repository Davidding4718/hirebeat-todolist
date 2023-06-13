import React from 'react';
import './App.css';
import LoginForm from './LoginForm';  // Assuming LoginForm.js is in the same directory
import './amplify-config';  // Load the Amplify configuration

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
