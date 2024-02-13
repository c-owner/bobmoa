import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
      <div className="App">
          <meta name="viewport" content="initial-scale=1, width=device-width"/>

          <header className="App-header">
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
          </header>
          <main>
              <Button variant="contained">Hello world</Button>
          </main>
      </div>
  );
}

export default App;