import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );

  function ItemForm({ onItemFormSubmit }) {
    const [itemName, setItemName] = useState("");
    const [itemCategory, setItemCategory] = useState("Produce");

    const handleNameChange = (event) => setItemName(event.target.value);
    const handleCategoryChange = (event) => setItemCategory(event.target.value);

    const handleSubmit = (event) => {
      event.preventDefault();
      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategory,
      };
      onItemFormSubmit(newItem);
      setItemName(""); // Clear the form
      setItemCategory("Produce"); // Reset category to default
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={handleNameChange}
        />
        <select value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          {/* Add more categories if needed */}
        </select>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default ItemForm;
