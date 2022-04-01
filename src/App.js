import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./Parent";

//App was the parent file but useNavigate cannot work with the Router so I built a bridge between them
function App() {
  return (
    <Router>
      <Parent />
    </Router>
  );
}

export default App;
