import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packed";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItmes(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItmes}
        ontoggleItems={toggleItems}
        onClearItems={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
