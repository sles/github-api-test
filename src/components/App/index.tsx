import React from 'react';
import './style.scss';
import Header from '../Header';
import GithubProject from '../GithubProject';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <GithubProject />
    </div>
  );
};

export default App;
