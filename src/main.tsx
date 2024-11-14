import { StrictMode } from 'react';  // Ensures React components follow best practices
import { createRoot } from 'react-dom/client';  // New API for React 18 to create a root
import './index.css';  // Import global CSS styles
import App from './App.tsx';  // Import the main App component

// Render the application within the root element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
