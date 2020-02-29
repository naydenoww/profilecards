import React from 'react';
import './App.scss';

const App = () => {
  return(
    <div className="card">
      <h1>Personal information</h1>
      <div className="button-wrapper">
        <button className="btn secondary">Back</button>
        <button className="btn primary">Next</button>
      </div>
    </div>
  );
}

export default App;
