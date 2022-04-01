import CreateList from "./CreateList";
import ListItem from "./ListItem";

export default function List({ list, handleDelete, submitEdit }) {
  return (
    <div>
      {list.length ? (
        list.map((item) => (
          <ListItem
            item={item}
            list={list.key}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <div>
          <CreateList list={list} />
        </div>
      )}
    </div>
  );
}
