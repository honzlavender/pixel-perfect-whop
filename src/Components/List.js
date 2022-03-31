import CreateList from "./CreateList";
import ListItem from "./ListItem";


export default function List({list, handleDelete, handleEdit}) {
  return (
    <div>
      {list.length ? (
        list.map((item) => <ListItem item={item} list={list.key} handleDelete={handleDelete} handleEdit={handleEdit}/>)
      ) : (
        <div>
          <CreateList list={list}/>
        </div>
      )}
    </div>
  );
}
