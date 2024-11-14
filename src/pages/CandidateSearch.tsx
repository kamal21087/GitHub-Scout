import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState<string>("");  // For searching specific username
  const [error, setError] = useState<string | null>(null);

  // Fetch a list of random candidates when the component mounts
  useEffect(() => {
    const fetchCandidates = async () => {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        setCandidateList(candidates);
        setCurrentCandidate(candidates[0]);  // Start with the first candidate
      } else {
        setMessage("No candidates available to review.");
      }
    };
    fetchCandidates();
  }, []);

  // Save candidate to local storage and move to next candidate
  const handleSaveCandidate = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
      savedCandidates.push(currentCandidate);
      localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
      handleNextCandidate();
    }
  };

  // Skip the current candidate and move to the next
  const handleNextCandidate = () => {
    const nextIndex = candidateList.indexOf(currentCandidate!) + 1;
    if (nextIndex < candidateList.length) {
      setCurrentCandidate(candidateList[nextIndex]);
    } else {
      setCurrentCandidate(null);
      setMessage("No more candidates available to review.");
    }
  };

  // Handle username search
  const handleSearch = async () => {
    try {
      setError(null);  // Reset any previous error
      const candidate = await searchGithubUser(username);
      setCurrentCandidate(candidate);
      setCandidateList([]);  // Clear the list when a specific search is done
    } catch (err) {
      console.error(err);  // Log the error to the console
      setError("User not found or API error");
      setCurrentCandidate(null);
    }
  };

  return (
    <div>
      <h2>Candidate Search</h2>
      
      {/* Search input for specific username */}
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={`${currentCandidate.login}'s avatar`} width="100" />
          <p><strong>Name:</strong> {currentCandidate.name || "N/A"}</p>
          <p><strong>Username:</strong> {currentCandidate.login}</p>
          <p><strong>Location:</strong> {currentCandidate.location || "N/A"}</p>
          <p><strong>Email:</strong> {currentCandidate.email || "N/A"}</p>
          <p><strong>Company:</strong> {currentCandidate.company || "N/A"}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div>
            <button onClick={handleSaveCandidate}>+</button>
            <button onClick={handleNextCandidate}>-</button>
          </div>
        </div>
      ) : (
        <h2>{message || "Loading candidates..."}</h2>
      )}
    </div>
  );
};

export default CandidateSearch;
