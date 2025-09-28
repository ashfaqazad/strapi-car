import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Navbar from "./components/Navbar";
// import CarList from "./components/CarList";
import Home from "./pages/Home"; // Add this
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          
          {/* <Route path="/carlist" element={<CarList />} /> */}

        </Routes>
        <Footer />
      </Router>
    </>
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
