import React, { useEffect, useState } from 'react';
import GithubApi from '../../services/GithubApi';


const useGithubRepo = () => {
  const [repoData, setRepoData] = useState<any>(null);
  useEffect(() => {
    async function getProjectData() {
      const githubApi = new GithubApi();
      const data = await githubApi.getRepoData();
      setRepoData(data);
    }
    getProjectData().catch(console.error);
  }, []);

  return repoData;
};

const GithubRepo: React.FC = () => {
  const repoData = useGithubRepo();
  return (
    <div />
  );
};

export default GithubRepo;
