import React from "react";

function Filter({ onCategoryChange }) {
  return;
  <div className="Filter">
    <input type="text" name="search" placeholder="Search..." />
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  </div>;

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Filter;
