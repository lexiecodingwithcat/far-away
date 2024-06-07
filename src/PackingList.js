import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onDeleteItems, onToggleItems, onClearItems }) {
    const [sortedBy, setSortedBy] = useState("input");
    let sortedItems;
    if (sortedBy === "input") sortedItems = items;
    //arr.slice() is to copy the original arrays to new one
    if (sortedBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    //when compared booleans, we need to change it to numbers first
    if (sortedBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
        <div className="action">
          <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
            <option value="input">Sorted by input</option>
            <option value="description">Sorted by description</option>
            <option value="packed">Sorted by packed status</option>
          </select>
          <button onClick={onClearItems}>Clear list</button>
        </div>
      </div>
    );
  }