import React, { useState } from 'react';

const CarbonFootprintInput = () => {
  // State variables for user input
  const [travelDistance, setTravelDistance] = useState(0);
  const [energyUsage, setEnergyUsage] = useState(0);
  const [transportType, setTransportType] = useState('car'); // Example: additional input

  // Constants for footprint calculation (optional)
  const CO2_PER_KM = 0.2; // Example: CO2 emission per kilometer (adjust as needed)
  const KWH_TO_CO2 = 0.8; // Example: CO2 emission per kWh (adjust based on energy source)

  // Function to calculate footprint (optional)
  const calculateFootprint = () => {
    if (travelDistance > 0 && energyUsage > 0) {
      return travelDistance * CO2_PER_KM + energyUsage * KWH_TO_CO2;
    }
    return 0;
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const footprintData = {
      travelDistance,
      energyUsage,
      transportType,
      footprint: calculateFootprint(), // Optional: Include calculated footprint
    };
    // Pass footprintData as a prop to DataSubmission component (replace with your implementation)
    console.log('Submitting data:', footprintData); // Placeholder for now
  };

  return (
    <div>
      <h2>Carbon Footprint Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="travelDistance">Travel Distance (km):</label>
        <input
          type="number"
          id="travelDistance"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
        />
        <label htmlFor="energyUsage">Energy Usage (kWh):</label>
        <input
          type="number"
          id="energyUsage"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
        />
        <label htmlFor="transportType">Transport Type:</label>
        <select id="transportType" value={transportType} onChange={(e) => setTransportType(e.target.value)}>
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Calculate and Submit</button>
      </form>
    </div>
  );
};

export default CarbonFootprintInput;
