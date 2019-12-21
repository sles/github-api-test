import { useEffect, useState } from 'react';
import GithubRepoApi, { Commit, Repo } from '../../services/GithubApi';

const useGithubRepo = (repoName: string, userName: string) => {
  const [ repoData, setRepoData ] = useState<Repo | null>(null);
  const [ commits, setRepoCommits ] = useState<Commit[] | []>([]);
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
  }, [ repoName, userName ]);

  return { repoData, commits };
};

export default useGithubRepo;
