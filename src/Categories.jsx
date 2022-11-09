import React from 'react';

const Categories = ({ getMenu, filteredMenu }) => {
  return (
    <div className="btn-container">
      {getMenu.map((menu, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filteredMenu(menu)}
          >
            {menu}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
