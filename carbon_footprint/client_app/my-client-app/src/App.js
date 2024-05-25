import firebase from "firebase/app";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Import your components
import CarbonFootprintInput from './CarbonFootprintInput';
import DataSubmission from './DataSubmission';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Your header or other content */}
        <Routes>
          <Route path="/" element={<CarbonFootprintInput />} />
          <Route path="/data-submission" element={<DataSubmission />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
