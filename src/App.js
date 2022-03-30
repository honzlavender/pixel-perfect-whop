import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AddNewList from './Components/AddNewTitle'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newlist" element={<AddNewList/>} />
      </Routes>
    </Router>
  );
}

export default App;
