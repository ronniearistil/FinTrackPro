// ListContainer.jsx
import React from 'react';

const ListContainer = ({ title, items, renderItem, emptyMessage }) => (
  <div className="list-container">
    <h2>{title}</h2>
    {items.length > 0 ? items.map(renderItem) : <p>{emptyMessage}</p>}
  </div>
);

export default ListContainer;
