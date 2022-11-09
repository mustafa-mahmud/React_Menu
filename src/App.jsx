import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const getMenu = ['all', ...new Set(items.map((menu) => menu.category))];

function App() {
  const [category, setCategory] = useState(items);

  const filteredMenu = (menu) => {
    let filterCategory = items.filter((item) => item.category === menu);

    if (menu === 'all') filterCategory = items;

    setCategory(filterCategory);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menus</h2>
          <div className="underline"></div>
        </div>

        <Categories getMenu={getMenu} filteredMenu={filteredMenu} />
        <Menu items={category} />
      </section>
    </main>
  );
}

export default App;
