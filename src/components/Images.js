import React, { useContext } from 'react';
import Image from './Image';
import { PhotoContext } from './PhotoContext';

function Images() {
  const { images } = useContext(PhotoContext);
  let img;
  if (images.length > 0) {
    img = images.map((item) => {
      let farm = item.farm;
      let server = item.server;
      let id = item.id;
      let secret = item.secret;
      let title = item.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} title={title} />;
    });
  }
  console.log(img);
  return (
    <div className="main__body__images">
      {!img ? (
        <div className="notImg">
          <h1>No Images</h1>
        </div>
      ) : (
        img
      )}
    </div>
  );
}

export default Images;
