import React from 'react';
import Header from '../Header';
import GithubRepo from '../GithubRepo';
import { GITHUB_REPO, GITHUB_USER } from '../../config';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <GithubRepo repoName={GITHUB_REPO} userName={GITHUB_USER} />
    </div>
  );
};

export default App;
