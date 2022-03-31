// import CreateList from "./Components/CreateList";
import Header from "./Header";
import List from "./List";

export default function Home({ list, handleDelete, handleEdit, newTitle }) {
  return (
    <>
      <Header />
      <List
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        newTitle={newTitle}
      />
      {/* <DropdownMenu/> */}
    </>
  );
}
