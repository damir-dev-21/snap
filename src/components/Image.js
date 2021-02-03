import React from 'react';

function Image({ url, title }) {
  return (
    <div className="images-img">
      <img src={url} alt={title} />
    </div>
  );
}

export default Image;
