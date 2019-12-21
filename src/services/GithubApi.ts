import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { GITHUB_API_URL } from '../config';

export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    }
  }
}

export interface Repo {
  name: string;
  language: string;
  owner: {
    login: string;
  }
  html_url: string;
}

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

  getData(): Promise<AxiosResponse<Repo>> {
    return this.http.get(this.baseUrl);
  }

  getCommits(): Promise<AxiosResponse<Commit[]>> {
    return this.http.get(`${this.baseUrl}/commits`);
  }

}

export default GithubRepoApi;
