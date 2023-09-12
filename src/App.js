import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Subscription from './Components/subscription';
import Payment from './Components/payment';
import Plan from './Components/plan';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </Router>
  );
}

export default App;
