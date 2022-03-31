// import CreateList from "./Components/CreateList";
import DeleteIcon from "../iconComponents/deleteIcon";
import DropdownMenu from "./DropdownMenu";
import Header from "./Header";
import List from "./List";
import MenuButtons from "./MenuButtons";

export default function Home({ list }) {
  return (
    <>
      <Header />
      <List list={list} />
      {/* <DropdownMenu/> */}
    </>
  );
}
