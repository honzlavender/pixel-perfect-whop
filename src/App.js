import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

//App was the parent file but useNavigate cannot work with the Router so I built a bridge between them
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
