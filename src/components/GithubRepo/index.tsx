import React from 'react';
import useGithubRepo from './useGithubRepo';
import RepoInfo from './RepoInfo';
import Commits from './Commits';


interface IProps {
  repoName: string;
  userName: string;
}

const GithubRepo: React.FC<IProps> = (props) => {
  const { repoData, commits } = useGithubRepo(props.repoName, props.userName);
  return (
    <div>
      <RepoInfo data={repoData} />
      <Commits list={commits} />
    </div>
  );
};

export default GithubRepo;
