import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import AddNewTitle from "./Screens/AddNewTitle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState([{ text: "", key: "" }]);
  // const [editingText, setEditingText] = useState('');
  // const [isEditing, setIsEditing] = useState(null)

  useEffect(() => {
    const json = localStorage.getItem("list");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setList(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("list", json);
  }, [list]);

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

    if (newTitle === '') {
      alert("oops! add title");
    } else if (newTitle) {
      setList((prevList) => {
        return [{ text: newTitle, key: Math.random().toString() }, ...prevList];
      });
    }
    navigate({
      pathname: "/",
    });
    setNewTitle("");
  };

  // function submitEdits(key) {
  //   const updatedTitles = [...list].map((newTitle) => {
  //     if (newTitle.key === key) {
  //       newTitle.text = editingText
  //     }
  //     return newTitle;
  //   });
  //   navigate({
  //     pathname: "/",
  //   });
  //   setList(updatedTitles);
  //   setIsEditing(null)
  // }


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
            onSubmit={onSubmit}
          />
        }
      />
      <Route
        path="/newlist/:listId"
        element={
          <AddNewTitle
            list={list}
            newTitle={newTitle}
            // setEditingText={setEditingText}
            // isEditing={isEditing}
            // submitEdits={submitEdits}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        }
      />
    </Routes>
  );
}
