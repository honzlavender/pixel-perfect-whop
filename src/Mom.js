import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import AddNewTitle from "./Components/AddNewTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Mom() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState([{ text: "", key: "" }]);
  // const [edit, setEdit] = useState(Edit ? Edit.text : '')

  const handleDelete = (key) => {
    setList((prevList) => {
      return prevList.filter((todo) => todo.key !== key);
    });
    // alert('hi')
  };

  const onChange = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  // const handleEdit = (e, key) => {
  //   setList({...newTitle})
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!newTitle) {
      alert("OOPS");
    } else {
      setList((prevList) => {
        return [{ text: newTitle, key: Math.random().toString() }, ...prevList];
      });
    }
    navigate({
      pathname: "/",
      state: {
        list,
      },
    });
    setNewTitle("");
  };

  return (
    // <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Home
            list={list}
            handleDelete={handleDelete}
            // handleEdit={handleEdit}
            newTitle={newTitle}
          />
        }
      />
      <Route
        path="/newlist"
        element={
          <AddNewTitle
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
