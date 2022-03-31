// import CreateList from "./Components/CreateList";
import Header from "./Header";
import List from "./List";

export default function Home({ list }) {
  return (
    <>
      <Header />
      <List list={list} />
    </>
  );
}
