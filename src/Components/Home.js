// import CreateList from "./Components/CreateList";
import DropdownMenu from "./DropdownMenu";
import Header from "./Header";
import List from "./List";

export default function Home({ list }) {
  return (
    <>
      <Header />
      <List list={list} />
      <DropdownMenu/>
    </>
  );
}
