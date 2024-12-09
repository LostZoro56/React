import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  //we don't need it right here but in stats comp
  //we can pass as props but we want to calc 3 values if we were to calculate
  //here we need to send 3 more props
  //const numItems = items.length;

  //this was initially in form component
  // now how form will update the state
  function handleAddItems(item) {
    //mutating states in react not allowed
    //can't do something like items.push(item)
    //so we return a new array adding newItem
    setItems((items) => [...items, item]);
  }

  //to know which item used id
  function handleDeleteItem(id) {
    //delete the item by updating state
    //as filter returns new array it will exclude the element that has same id
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // we just want to update one of the object in array we will just loop
    //we get brand new array with the object packed marked
    //if the id is same then we just toggle
    //and following is the way we update an object in an array
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    //this is not any js or other fucntion its a web api function
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
