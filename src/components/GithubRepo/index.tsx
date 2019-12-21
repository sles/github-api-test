import React, { useEffect, useState } from 'react';
import GithubRepoApi from '../../services/GithubApi';


const useGithubRepo = (repoName: string, userName: string) => {
  const [ repoData, setRepoData ] = useState<any>(null);
  const [ commits, setRepoCommits ] = useState<any>(null);
  useEffect(() => {
    const githubApi = new GithubRepoApi(repoName, userName);

    async function getRepoData() {
      const { data } = await githubApi.getData();
      setRepoData(data);
    }

    async function getRepoCommits() {
      const { data } = await githubApi.getCommits();
      setRepoCommits(data);
    }

    getRepoData().catch(console.error);
    getRepoCommits().catch(console.error);
  }, []);

  return { repoData, commits };
};

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
