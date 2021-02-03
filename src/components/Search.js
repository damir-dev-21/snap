import React, { useState } from 'react';

function Search({ setData, search }) {
  const [text, setText] = useState('');
  const title = text;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={(e) => {
          setData(e, title);
          setText('');
        }}>
        <img src={search} alt="" />
      </button>
    </form>
  );
}

const secSearch = React.memo(Search);

export default secSearch;
