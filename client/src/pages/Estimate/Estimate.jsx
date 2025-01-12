import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "../Properties/Properties.css";
import UserDetailContext from "../../context/UserDetailContext";
import "./Estimate.css";

const appliancesData = [
  { name: "Fan", power: 50, cost: 20 },
  { name: "Television", power: 150, cost: 150 },
  { name: "Refrigerator", power: 200, cost: 300 },
  { name: "Air Conditioner", power: 1000, cost: 500 },
  { name: "Laptop", power: 60, cost: 800 },
  { name: "Microwave", power: 1200, cost: 250 },
  { name: "Washing Machine", power: 500, cost: 400 },
  { name: "Electric Kettle", power: 1500, cost: 50 },
  { name: "Water Heater", power: 3000, cost: 800 },
  { name: "Iron", power: 1000, cost: 100 },
  { name: "Toaster", power: 1200, cost: 30 },
  { name: "Ceiling Light", power: 40, cost: 10 },
];

const buildingMultipliers = {
  home: 1,
  office: 1.2,
  church: 1.5,
  school: 1.3,
};

const Estimate = () => {
  const [buildingType, setBuildingType] = useState("");
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [estimate, setEstimate] = useState(null);

  const handleApplianceSelect = (event) => {
    const selected = appliancesData.find((a) => a.name === event.target.value);
    if (selected && !selectedAppliances.some((a) => a.name === selected.name)) {
      setSelectedAppliances([...selectedAppliances, { ...selected, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (name, quantity) => {
    setSelectedAppliances((prev) =>
      prev.map((a) => (a.name === name ? { ...a, quantity: parseInt(quantity) || 0 } : a))
    );
  };

  const calculateEstimate = () => {
    if (!buildingType || selectedAppliances.length === 0) {
      alert("Please select a building type and appliances.");
      return;
    }

    const totalPower = selectedAppliances.reduce(
      (sum, a) => sum + a.power * (a.quantity || 0),
      0
    );

    const totalApplianceCost = selectedAppliances.reduce(
      (sum, a) => sum + a.cost * (a.quantity || 0),
      0
    );

    const solarPanels = Math.ceil(totalPower / 350); // Assuming each panel provides 350W
    const inverter = Math.ceil(totalPower / 1000); // 1 inverter for every 1kW
    const batteries = Math.ceil(totalPower / 1000 * 2); // 2 batteries for each kW

    const installationCost = 500; // Flat rate
    const solarEquipmentCost = solarPanels * 200 + inverter * 1000 + batteries * 500;

    const buildingMultiplier = buildingMultipliers[buildingType];
    const totalCost = (totalApplianceCost + solarEquipmentCost + installationCost) * buildingMultiplier;

    setEstimate({
      totalPower,
      totalApplianceCost,
      solarEquipmentCost,
      installationCost,
      totalCost,
      solarDetails: { solarPanels, inverter, batteries },
    });
  };

  const resetForm = () => {
    setBuildingType("");
    setSelectedAppliances([]);
    setEstimate(null);
  };

  return (
    <div className="estimate-wrapper">
      <div className="estimate-container">
        <h1 className="estimate-title">Get Your Solar Estimate</h1>
        <p className="estimate-description">
          Choose your building type, appliances, and quantities to calculate your solar setup and cost.
        </p>

        {/* Building Type */}
        <label className="estimate-label">Building Type:</label>
        <select
          value={buildingType}
          onChange={(e) => setBuildingType(e.target.value)}
          className="estimate-select"
        >
          <option value="">Select Building Type</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="church">Church</option>
          <option value="school">School</option>
        </select>

        {/* Appliance Selection */}
        <label className="estimate-label">Appliances:</label>
        <select onChange={handleApplianceSelect} className="estimate-select">
          <option value="">Select Appliance</option>
          {appliancesData.map((appliance) => (
            <option key={appliance.name} value={appliance.name}>
              {appliance.name} ({appliance.power}W, ${appliance.cost})
            </option>
          ))}
        </select>

        <div className="appliance-list">
          {selectedAppliances.map((appliance) => (
            <div key={appliance.name} className="appliance-item">
              <span>{appliance.name}</span>
              <input
                type="number"
                className="appliance-quantity"
                value={appliance.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(appliance.name, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="estimate-buttons">
          <button onClick={calculateEstimate} className="estimate-button">Calculate Estimate</button>
          <button onClick={resetForm} className="estimate-button reset">Reset</button>
        </div>

        {/* Estimate Results */}
        {estimate && (
          <div className="estimate-results">
            <h2 className="estimate-results-title">Your Solar Estimate</h2>
            <p>Total Power Consumption: {estimate.totalPower} W</p>
            <p>Total Appliance Cost: ${estimate.totalApplianceCost.toFixed(2)}</p>
            <p>Solar Equipment Cost: ${estimate.solarEquipmentCost.toFixed(2)}</p>
            <p>Installation Cost: ${estimate.installationCost.toFixed(2)}</p>
            <p><strong>Total Cost: ${estimate.totalCost.toFixed(2)}</strong></p>

            <h3>Solar Setup Details:</h3>
            <p>Solar Panels: {estimate.solarDetails.solarPanels}</p>
            <p>Inverters: {estimate.solarDetails.inverter}</p>
            <p>Batteries: {estimate.solarDetails.batteries}</p>

            <button className="estimate-button contact">Contact Us</button>
          </div>
        )}

        {/* Disclaimer */}
        <p className="estimate-disclaimer">
          Disclaimer: This is an estimate and may differ from the actual cost. Contact us for detailed information.
        </p>
      </div>
    </div>
  );
};

export default Estimate;
