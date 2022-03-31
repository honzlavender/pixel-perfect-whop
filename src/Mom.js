import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import AddNewList from "./Components/AddNewTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Mom() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!newTitle) {
      alert("OOPS");
    } else {
      setList((prevList) => {
        return [ newTitle, ...prevList];
      });
    }
    navigate({
      pathname: "/",
      state: {
        list
      },
    });
    setNewTitle('')
  };
  console.log(list)
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Home list={list} />} />
        <Route
          path="/newlist"
          element={
            <AddNewList
              list={list}
              newTitle={newTitle}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          }
        />
      </Routes>
    // </Router>
  );
}

export default Mom;
