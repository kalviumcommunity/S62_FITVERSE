import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import FitnessPage from './Pages/FitnessPage'; 
// import SignUp from './Pages/SignUp';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center text-white">
        <Routes>
          {/* Landing Page Route */}
          <Route
            path="/"
            element={
              <div className="text-center space-y-6 p-8 max-w-lg border border-white/20 rounded-lg shadow-lg bg-white/10">
                <h1 className="text-4xl font-extrabold tracking-tight">
                  Welcome to the Landing Page
                </h1>
                <p className="text-lg">Track your real-time data.</p>
                <button
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  onClick={() => alert('Learn More about the ASAP Project!')}
                >
                  Learn More
                </button>
                
                
              </div>
            }
          />
          <Route path="/user" element={<FitnessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
