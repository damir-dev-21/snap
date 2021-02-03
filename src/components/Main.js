import React, { useContext, useEffect } from 'react';
import Images from './Images';
import { PhotoContext } from './PhotoContext';
import Loader from './Loader/Loader';

function Main() {
  const { images, runSearch, loading, title } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(title);
  }, []);

  return (
    <section className="main">
      <div className="main__title">
        <h3>{title} Pictures</h3>
      </div>
      <div className="main__body">{loading ? <Loader /> : <Images images={images} />}</div>
    </section>
  );
}

export default Main;
