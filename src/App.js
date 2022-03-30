import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import AddNewList from './Components/AddNewTitle'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/newlist" element={<AddNewList/>} />
      </Routes>
    </Router>
  );
}

export default App;
