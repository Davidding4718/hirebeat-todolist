import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the To-Do List</h1>
      <h2>Please select an option</h2>
      <Link to="/signin">Sign In</Link>
      <br/>
      <Link to="/signup">Create Account</Link>
    </div>
  );
}

export default Home;
