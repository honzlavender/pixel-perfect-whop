import CreateList from "./CreateList";
import ListItem from "./ListItem";


export default function List({list}) {
  return (
    <div>
      {list.length ? (
        list.map((item) => <ListItem item={item} list={list} />)
      ) : (
        <div>
          <CreateList list={list}/>
        </div>
      )}
    </div>
  );
}
