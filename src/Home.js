import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/signin">Sign In</Link>
      <br/>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Home;
