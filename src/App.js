import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mom from "./Mom";

// import Home from "./Home";
// import AddNewList from "./Components/AddNewTitle";
// // import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function App() {
  return (
    <Router>
      <Mom />
    </Router>
  );
}

export default App;
