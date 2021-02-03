import React from 'react';

function Nav({ btns, setData }) {
  return (
    <nav>
      {btns.map((item) => {
        return <button onClick={(e) => setData(e, item)}>{item}</button>;
      })}
    </nav>
  );
}

export default Nav;
