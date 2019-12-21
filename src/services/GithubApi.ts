import axios, { AxiosInstance } from 'axios';
import { GITHUB_API_URL, GITHUB_REPO, GITHUB_USER } from '../config';

class GithubApi {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: GITHUB_API_URL,
      headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
      },
    });
  }

  getRepoData(){
    return this.http.get(`/repos/${GITHUB_USER}/${GITHUB_REPO}`);
  }

}

export default GithubApi;
