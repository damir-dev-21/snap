import React, { createContext, useState } from 'react';
import axios from 'axios';
import { key } from '../api.key';
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('Nature');
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    setTitle(query);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log('Encountered an error with fetching and parsing data', error);
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch, title }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
