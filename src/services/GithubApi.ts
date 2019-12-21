import axios, { AxiosInstance } from 'axios';
import { GITHUB_API_URL } from '../config';

class GithubApi {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: GITHUB_API_URL,
    });
  }
}

class GithubRepoApi extends GithubApi {
  baseUrl: string;

  constructor(repoName: string, userName: string) {
    super();
    this.baseUrl = `/repos/${userName}/${repoName}`;
  }

  getData() {
    return this.http.get(this.baseUrl);
  }

  getCommits() {
    return this.http.get(`${this.baseUrl}/commits`);
  }

}

export default GithubRepoApi;
