// App.js
import React, { useState } from 'react';
import { useLocations } from './useLocation';

import './App.css';

function App() {
  const [inputLocation, setInputLocation] = useState('');
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAxODMyNDc1LCJleHAiOjE3MDE4MzMzNzV9.iw7cdybR23P5Bofdnm8FLUryuJuK6gR5Aqg8C55SfxM' // Replace with your actual token or implement proper authentication
  );

  const handleInputChange = (event) => {
    setInputLocation(event.target.value);
  };

  const { locations, isLoading, isError } = useLocations(inputLocation, token);

  return (
    <div className="App">
      <label>
        Enter Location:
        <input type="text" value={inputLocation} onChange={handleInputChange} />
      </label>
      <button>Get Locations</button>

      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>{isError}</p>}

      {locations.length > 0 && (
        <div>
          <h2>Locations</h2>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(locations, null, 2)}</pre>

        </div>
      )}
    </div>
  );
}

export default App;
