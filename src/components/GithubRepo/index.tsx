import React from 'react';
import useGithubRepo from './useGithubRepo';


interface IProps {
  repoName: string;
  userName: string;
}

const GithubRepo: React.FC<IProps> = (props) => {
  const { repoData, commits } = useGithubRepo(props.repoName, props.userName);

  console.log(repoData, commits);
  return (
    <div />
  );
};

export default GithubRepo;
