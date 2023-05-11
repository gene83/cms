import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");

  async function fetchData() {
    const res = await fetch("items/1")
    console.log(await res.json());
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
