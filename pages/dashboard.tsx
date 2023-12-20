// Your component where you want to generate and display a GIF

import { useState } from 'react';

const YourComponent = () => {
  const [textForGIF, setTextForGIF] = useState('');
  const [generatedGIF, setGeneratedGIF] = useState(null);

  const generateGIF = async () => {
    try {
      const response = await fetch(`/api/generateGIF?query=${textForGIF}`);
      const data = await response.json();
      
      if (data && data.gifUrl) {
        setGeneratedGIF(data.gifUrl);
      } else {
        console.error('Error generating GIF:', data.error);
      }
    } catch (error) {
      console.error('Error generating GIF:', error);
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

      {/* Display the generated GIF */}
      {generatedGIF && (
        <img src={generatedGIF} alt="Generated GIF" />
      )}
    </div>
  );
};

export default YourComponent;
