import { TOKEN } from '../constants/auth';
import GitHub from 'github-api';

const GitHubApi = new GitHub({
   token: TOKEN
});

export default GitHubApi;
