export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      ></input>
      {/* //don't  write javascript object immed instead adding conditionally class we will ad style*/}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* ondeleteItem will not work cause onclick this will return even
        not id but we dont want event we want id here so we create a call back function
        and pass id to ondeleteitem as we directly cannot pass id to ondleteitem
        */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
