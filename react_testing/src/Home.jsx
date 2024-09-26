// import React from '@vitejs/plugin-react';
import { useNavigate } from 'react-router-dom';  // Importing the hook to programmatically navigate

function Home() {
  const navigate = useNavigate();  // Initializing the navigate function

  const goToAbout = () => {
    navigate('/about');  // Programmatically navigate to the "About" page
  };
  
  const goTospeech = () => {
    navigate('/speech');
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the application.</p>

      {/* Button to navigate to the About page */}
      <button onClick={goToAbout}>
        Go to About Page
      </button>
      <button onClick={goTospeech}>
        Go to speech Page
      </button>
    </div>
  );
}

export default Home;
