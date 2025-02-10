import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //because Form and Pakcinglist are siblings, so we need to lift up states
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //react is immutable, so we need to create a new array instead of using the current one
    //so we need to update the state based on current state
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems(){
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([]);
  }
 
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems ={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}









