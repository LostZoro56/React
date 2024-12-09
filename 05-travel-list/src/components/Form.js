import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //we are not using items state in our jsx yet we
  //we don't need this in this current comp
  //for is just used to add these items in arr
  // the actual one to render is packing list
  //but item state is in form but we need it in packing list
  //how do we get it from  form to packing list
  //cannot pass as prop as its not parent component of packing list
  //but data can only flow down the tree not side or upside
  // used technique here is state lifting
  // take this state and move up to the closest parent component

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    //now we want to render this object in packing list
    onAddItems(newItem);
    // when form is submitted we want to clear the fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* to pass actual number 1 not string 1 */}
        {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
        {/* in real app we have 20 options we can write it like this */}

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>Add</button>
    </form>
  );
}
