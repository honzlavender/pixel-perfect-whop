import CreateList from "./CreateList";
import ListItem from "./ListItem";

export default function List() {
    // const list = useState()
     const list = [];
  return (
    <div>
      {list.length ? (
        list.map((item) => <ListItem item={item} />)
      ) : (
        <div>
          <CreateList />
        </div>
      )}
    </div>
  );
}
