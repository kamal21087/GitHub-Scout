import { Candidate } from '../interfaces/Candidate.interface';

const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    // Log the token to verify it is being loaded
    console.log("GitHub Token (searchGithub):", import.meta.env.VITE_GITHUB_TOKEN);
    console.log("GitHub Token (from env):", import.meta.env.VITE_GITHUB_TOKEN);

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }

    const data = await response.json();
    return data as Candidate[];
  } catch (err) {
    console.error('An error occurred during searchGithub:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate> => {
  try {
    // Log the token to verify it is being loaded
    console.log("GitHub Token (searchGithubUser):", import.meta.env.VITE_GITHUB_TOKEN);

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }

    const data = await response.json();
    return data as Candidate;
  } catch (err) {
    console.error('An error occurred during searchGithubUser:', err);
    return {} as Candidate;
  }
};

export { searchGithub, searchGithubUser };
