// src/pages/SavedCandidates.tsx

import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [filterByLocation, setFilterByLocation] = useState<string>('');

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  const filteredAndSortedCandidates = [...savedCandidates]
    .filter(candidate => 
      filterByLocation === '' || candidate.location?.toLowerCase().includes(filterByLocation.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return (a.name || "").localeCompare(b.name || "");
      } else if (sortBy === 'followers') {
        return (b.followers || 0) - (a.followers || 0);
      }
      return 0;
    });

  const handleClearFilters = () => {
    setSortBy('name');
    setFilterByLocation('');
  };

  return (
    <div>
      <h1>Potential Candidates</h1>

      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="followers">Followers</option>
        </select>
      </div>

      <div>
        <label>Filter by Location: </label>
        <input
          type="text"
          value={filterByLocation}
          onChange={(e) => setFilterByLocation(e.target.value)}
          placeholder="Enter location"
        />
      </div>

      <div>
        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>

      {filteredAndSortedCandidates.length === 0 ? (
        <h2>No candidates match your criteria.</h2>
      ) : (
        filteredAndSortedCandidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="50" />
            <p><strong className="label">Name:</strong> <span className={candidate.name ? "value" : "missing"}>{candidate.name || "N/A"}</span></p>
            <p><strong className="label">Username:</strong> <span className="value">{candidate.login}</span></p>
            <p><strong className="label">Location:</strong> <span className={candidate.location ? "value" : "missing"}>{candidate.location || "N/A"}</span></p>
            <p><strong className="label">Followers:</strong> <span className="value">{candidate.followers}</span></p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedCandidates;
