import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Home from "./Components/Home";
import AddNewTitle from "./Components/AddNewTitle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EditList from "./Components/EditList";

export default function Parent() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState([{ text: "", key: "" }]);

  // useEffect(() => {
  //   const json = localStorage.getItem("list");
  //   const loadedTodos = JSON.parse(json);
  //   if (loadedTodos) {
  //     setList(loadedTodos);
  //   }
  // }, []);

  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("list", json);
  }, [list]);

  // function submitEdit(key) {
  //   const updatedTodos = [...list].map((todo) => {
  //     //   if (todo.key === key) {
  //     //     todo.text = newTitle;
  //     //   }
  //     //   return todo;
  //     // });
  //     if (todo.key === key) {
  //       setList((prevList) => {
  //         todo.text = newTitle.text;
  //       });
  //     }
  //     return todo;
  //   });

  //   navigate({
  //     pathname: "/",
  //   });

  //   setList(updatedTodos);
  //   // console.log(updatedTodos);
  // }

  const handleDelete = (key) => {
    let deletedList = [...list].filter((todo) => todo.key !== key);
    setList(deletedList);
  };

  const onChange = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  const onSubmit = (e, key) => {
    e.preventDefault();

    if (newTitle === "") {
      alert("OOPS");
    } else {
      setList((prevList) => {
        return [{ text: newTitle, key: Math.random().toString() }, ...prevList];
      });
    }
    navigate({
      pathname: "/",
    });
    setNewTitle("");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home list={list} handleDelete={handleDelete} newTitle={newTitle} />
        }
      />
      <Route
        path="/newlist"
        element={
          <AddNewTitle
            list={list}
            newTitle={newTitle}
            onChange={onChange}
            // submitEdit={submitEdit}
            onSubmit={onSubmit}
          />
        }
      />
      <Route
        path="/editlist/:listId"
        element={
          <EditList
            list={list}
            newTitle={newTitle}
            // submitEdit={submitEdit}
            onChange={onChange}
          />
        }
      />
    </Routes>
  );
}
