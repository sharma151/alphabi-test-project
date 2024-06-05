// Your component where you want to generate and display a GIF

import { useState } from 'react';

const YourComponent = () => {
  const [textForGIF, setTextForGIF] = useState('');
  const [generatedGIF, setGeneratedGIF] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateGIF = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/generateGIF?query=${textForGIF}`);
      const data = await response.json();
      
      if (data && data.gifUrl) {
        setGeneratedGIF(data.gifUrl);
      } else {
        console.error('Error generating GIF:', data.error);
      }
    } catch (error) {
      console.error('Error generating GIF:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = () => {
    if (textForGIF.trim() !== '') {
      generateGIF();
    }
  };

  // Render the UI to display the generated GIF using the generatedGIF state

  return (
    <div>
      <input
        type="text"
        value={textForGIF}
        onChange={(e) => setTextForGIF(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate GIF</button>

      {/* Display the generated GIF or loading indicator */}
      {loading && <p>Loading...</p>}
      {generatedGIF && !loading && (
        <img src={generatedGIF} alt="Generated GIF" />
      )}
    </div>
  );
};

export default YourComponent;
