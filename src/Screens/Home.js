// import CreateList from "./Components/CreateList";
import Header from "../Components/Header";
import List from "../Components/List";


export default function Home({ list, handleDelete, newTitle }) {
  return (
    <>
      <Header />
      <List list={list} handleDelete={handleDelete} newTitle={newTitle} />
    </>
  );
}
