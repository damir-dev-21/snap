import React, { useContext } from 'react';
import Nav from './Nav';
import { PhotoContext } from './PhotoContext';
import Search from './Search';

const btns = ['City', 'Earth', 'Cars', 'Food'];

function Header({ search }) {
  const { runSearch } = useContext(PhotoContext);

  const setData = (e, name) => {
    e.preventDefault();
    runSearch(name);
  };

  return (
    <header>
      <div className="logo">
        <h1>SnapShot</h1>
      </div>

      <Search setData={setData} search={search} />

      <Nav btns={btns} setData={setData} />
    </header>
  );
}

export default Header;
