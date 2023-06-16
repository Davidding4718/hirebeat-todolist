import React from 'react';
import './App.css';
import Home from './Home';
import SignUp from './SignUp'; 
import SignIn from './SignIn'; 
import Template from './Template'; 
import Todo from './Todo';
import NoteForm from './NoteForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ConfirmSignUp from './ConfirmSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/Template" element={<Template />} />
            <Route path="/confirmsignup" element={<ConfirmSignUp />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/NoteForm" element={<NoteForm />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
