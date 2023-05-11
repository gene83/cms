import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");

  function fetchData() {
    setData("FETCHED")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CMS</h1>
      </header>
      <div>
        <button onClick={() => fetchData()}>
          TEST
        </button>
        {data}
      </div>
    </div>
  );
}

export default App;
