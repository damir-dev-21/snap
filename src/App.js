import React from 'react';
import search from './search-icon.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PhotoContextProvider from './components/PhotoContext';

const App = (props) => {
  return (
    <PhotoContextProvider>
      <div className="App">
        <article className="container">
          <Header search={search} />
          <Main />
        </article>
      </div>
    </PhotoContextProvider>
  );
};

export default App;
