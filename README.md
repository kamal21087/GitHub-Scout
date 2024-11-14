# GitHub Scout

GitHub Scout is a candidate search application that allows employers to search for potential candidates on GitHub, save them, and view detailed information about each candidate. The application provides options to sort and filter saved candidates for a streamlined hiring process.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Project Overview

GitHub Scout is designed to assist employers in finding and managing potential candidates using GitHub data. Users can search for GitHub users, view their profiles, and save those they’re interested in. The application offers sorting and filtering capabilities to refine the saved candidates list.

## Features

- **GitHub User Search**: Search for GitHub users by username or view a list of randomly generated users.
- **Save Candidates**: Add interesting candidates to a saved list for easy reference.
- **Sort and Filter**: Sort saved candidates by name or follower count and filter by location.
- **Persisted Data**: Saved candidates are stored locally and persist across sessions.
- **Responsive Design**: Fully responsive design for a seamless experience on desktop and mobile.

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS, Bulma (optional if used)
- **API**: GitHub REST API
- **Persistence**: Local Storage for saved candidates

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/github-scout.git
   cd github-scout
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your GitHub Personal Access Token:
   ```plaintext
   VITE_GITHUB_TOKEN=your_actual_github_token_here
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to view the app.

## Usage

- **Search for Candidates**: On the main page, enter a GitHub username to search or view random candidates.
- **Save a Candidate**: Click the `+` button to save a candidate, or click `-` to skip to the next candidate.
- **View Saved Candidates**: Go to the "Saved Candidates" page to see your saved list.
- **Sort and Filter**: Use the dropdown to sort by name or followers and filter candidates by location. Click "Clear Filters" to reset sorting and filtering.

## Environment Variables

GitHub Scout uses a GitHub Personal Access Token for authentication with the GitHub API. Create a fine-grained token with public access and add it to the `.env` file as `VITE_GITHUB_TOKEN`.

# GitHub Scout

GitHub Scout is a candidate search application that allows employers to search for potential candidates on GitHub, save them, and view detailed information about each candidate.

### Live Demo
[GitHub Scout is live on Netlify!](https://githubcanscout.netlify.app/)

### Screenshots

#### Saved Candidates Page
![Saved Candidates Page](./Assets/Screenshot%202024-11-13%20at%2010.25.51%20PM.png)

#### Candidate Search Page
![Candidate Search Page](./Assets/Screenshot%202024-11-13%20at%2010.32.25%20PM.png)

## Future Enhancements

- **Pagination**: Support pagination for random user results.
- **Advanced Filtering**: Filter by additional criteria such as programming languages or location radius.
- **Search History**: Allow users to view and clear previous searches.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.