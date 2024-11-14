export interface Candidate {
  id: number;                 // Unique identifier for the user
  login: string;              // GitHub username
  name: string | null;        // Full name, nullable if not provided
  location: string | null;    // Location, nullable if not provided
  avatar_url: string;         // URL of the user's avatar image
  email: string | null;       // Email, nullable if not provided
  html_url: string;           // URL to the user's GitHub profile
  company: string | null;     // Company name, nullable if not provided
  bio: string | null;         // Bio or description, nullable if not provided
  public_repos: number;       // Number of public repositories
  followers: number;          // Number of followers
  following: number;          // Number of users the candidate is following
}
