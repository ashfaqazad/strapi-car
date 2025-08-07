import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./components/Cars";
// import Home from "./components/Home"; // Add this


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </Router>
  );
}

export default App;



// // src/App.js
// import React from 'react';
// import CarList from './components/CarList';
// import Cars from './components/Cars';

// function App() {
//   return (
//     <div className="App">
//       <h1>🚗 Car Website</h1>
//       <CarList />
//       <Cars />
//     </div>
//   );
// }

// export default App;
