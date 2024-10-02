"use client"

import React, { useState } from "react";

const lockerData = {
  column1: [
    { label: "Locker1", defaultChecked: false },
    { label: "Locker2", defaultChecked: true },
    { label: "Locker3", defaultChecked: true },
    { label: "Locker4", defaultChecked: true },
    { label: "Locker5", defaultChecked: false },
    { label: "Locker6", defaultChecked: false },
    { label: "Locker7", defaultChecked: false },
  ],
  column2: [
    { label: "Locker8", defaultChecked: false },
    { label: "Locker9", defaultChecked: true },
    { label: "Locker10", defaultChecked: true },
    { label: "Locker11", defaultChecked: true },
    { label: "Locker12", defaultChecked: false },
    { label: "Locker13", defaultChecked: false },
    { label: "Locker14", defaultChecked: false },
  ],
  column3: [
    { label: "Locker15", defaultChecked: false },
    { label: "Locker16", defaultChecked: true },
    { label: "Locker17", defaultChecked: true },
    { label: "Locker18", defaultChecked: true },
    { label: "Locker19", defaultChecked: false },
    { label: "Locker20", defaultChecked: false },
    { label: "Locker21", defaultChecked: false },
  ],
};

const LockerBooking = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [checkedState, setCheckedState] = useState(
    Object.keys(lockerData).reduce((acc, column) => {
      lockerData[column].forEach((locker) => {
        acc[locker.label] = locker.defaultChecked;
      });
      return acc;
    }, {})
  );

  const handleFieldChange = (e, index, fieldName) => {
    const updatedDetails = [...bookingDetails];
    updatedDetails[index][fieldName] = e.target.value;
    setBookingDetails(updatedDetails);
  };

  const addRow = (lockerLabel) => {
    const currentTime = new Date().toISOString().slice(0, 16); // current time in 'yyyy-mm-ddThh:mm' format
    setBookingDetails([
      ...bookingDetails,
      { locker: lockerLabel, startTime: currentTime, endTime: "" },
    ]);
  };

  const handleDeleteRow = (index) => {
    const updatedDetails = bookingDetails.filter((_, i) => i !== index);
    setBookingDetails(updatedDetails);
  };

  const handleCheckboxChange = (lockerLabel) => {
    if (!checkedState[lockerLabel]) {
      // If the locker was not previously checked, add a new row
      addRow(lockerLabel);
    }
    setCheckedState({
      ...checkedState,
      [lockerLabel]: !checkedState[lockerLabel],
    });
  };

  return (
    <div>
      <div className="row">
        {Object.keys(lockerData).map((columnKey, index) => (
          <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
            <div className="checkbox-style1">
              {lockerData[columnKey].map((locker, lockerIndex) => (
                <label key={lockerIndex} className="custom_checkbox">
                  {locker.label}
                  <input
                    type="checkbox"
                    checked={checkedState[locker.label]}
                    onChange={() => handleCheckboxChange(locker.label)}
                    disabled={locker.defaultChecked} // Disable if initially checked
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Details Table */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "40%" }}>Locker Number</th>
                <th style={{ width: "30%" }}>Start Time</th>
                <th style={{ width: "30%" }}>End Time</th>
                <th style={{ width: "10%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.map((detail, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={detail.locker}
                      onChange={(e) => handleFieldChange(e, index, "locker")}
                      className="form-select"
                    >
                      <option value="">Select Locker</option>
                      {Object.values(lockerData)
                        .flat()
                        .map((locker, lockerIndex) => (
                          <option key={lockerIndex} value={locker.label}>
                            {locker.label}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="datetime-local"
                      value={detail.startTime}
                      onChange={(e) =>
                        handleFieldChange(e, index, "startTime")
                      }
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="datetime-local"
                      value={detail.endTime}
                      onChange={(e) => handleFieldChange(e, index, "endTime")}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteRow(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => addRow("")}
                  >
                    <i className="fas fa-plus-circle"></i> Add Row
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LockerBooking;
