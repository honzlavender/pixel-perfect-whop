import CreateList from "./CreateList";
import ListItem from "./ListItem";

export default function List({ list, handleDelete, newTitle }) {
  //

  return (
    <div>
      {/* maps and displays lists */}
      {list.length ? (
        list.map((item) => (
          <ListItem item={item} list={list} handleDelete={handleDelete} />
        ))
      ) : (
        <div>
          {/* empty state - no lists exists */}
          <CreateList list={list} />
        </div>
      )}
    </div>
  );
}
