import { useState } from 'react';
import './App.css';
import NewPost from './pages/new-post/NewPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CMS</h1>
      </header>
      <div>
        <NewPost />
      </div>
    </div>
  );
}

export default App;
