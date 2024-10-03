import React from "react";

const GymType = ({ filterFunctions }) => {
  const options = [
    { id: "flexRadioDefault3", label: "All", defaultChecked: true },
    { id: "flexRadioDefault1", label: "Monthly" },
    { id: "flexRadioDefault2", label: "Yearly" },
  ];

  return (
    <>
      {options.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.id}
        >
          <input
            className="form-check-input"
            type="radio"
            checked={filterFunctions?.membershipType === option.label}
            onChange={() => filterFunctions.handleGymType(option.label)}
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default GymType;
