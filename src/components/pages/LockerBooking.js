"use client";

import React, { useState } from "react";
import "./LockerBooking.css";

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

const getCurrentTimeInEAT = () => {
  const now = new Date();
  const utcDate = new Date(now.toUTCString());
  const eatDate = new Date(utcDate.getTime() + 3 * 60 * 60 * 1000);
  return eatDate.toISOString().slice(0, 16);
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

    if (fieldName === "startTime") {
      const endTime = new Date(e.target.value);
      endTime.setMinutes(endTime.getMinutes() + 30);
      updatedDetails[index].endTime = endTime.toISOString().slice(0, 16);
    }

    if (fieldName === "endTime") {
      const startTime = new Date(updatedDetails[index].startTime);
      const selectedEndTime = new Date(e.target.value);
      if (selectedEndTime <= startTime) {
        alert("End time must be greater than start time.");
        return;
      }
    }

    setBookingDetails(updatedDetails);
  };

  const addRow = () => {
    setBookingDetails([
      {
        locker: "",
        startTime: getCurrentTimeInEAT(),
        endTime: "",
      },
      ...bookingDetails,
    ]);
  };

  const removeRow = (lockerLabel) => {
    const updatedDetails = bookingDetails.filter(
      (detail) => detail.locker !== lockerLabel
    );
    setBookingDetails(updatedDetails);
  };

  const handleDeleteRow = (index, lockerLabel) => {
    const updatedDetails = bookingDetails.filter((_, i) => i !== index);
    setBookingDetails(updatedDetails);
    setCheckedState((prevState) => ({
      ...prevState,
      [lockerLabel]: false,
    }));
  };

  const handleCheckboxChange = (lockerLabel) => {
    if (!checkedState[lockerLabel]) {
      setBookingDetails([
        {
          locker: lockerLabel,
          startTime: getCurrentTimeInEAT(),
          endTime: "",
        },
        ...bookingDetails,
      ]);
    } else {
      removeRow(lockerLabel);
    }
    setCheckedState({
      ...checkedState,
      [lockerLabel]: !checkedState[lockerLabel],
    });
  };

  const handleLockerSelect = (selectedLocker, index) => {
    const updatedDetails = [...bookingDetails];
    const existingRowIndex = updatedDetails.findIndex(
      (detail) => detail.locker === selectedLocker
    );

    if (existingRowIndex === -1) {
      updatedDetails[index].locker = selectedLocker;
      setCheckedState((prevState) => {
        const newCheckedState = { ...prevState };
        Object.keys(newCheckedState).forEach((locker) => {
          if (locker === selectedLocker) {
            newCheckedState[locker] = true;
          }
        });
        return newCheckedState;
      });
    }

    setBookingDetails(updatedDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePayment = () => {
    alert("Payment triggered for selected lockers.");
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div>
        <div className="row">
          {Object.keys(lockerData).map((columnKey, index) => (
            <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
              <div className="checkbox-style1">
                {lockerData[columnKey].map((locker, lockerIndex) => (
                  <label
                    key={lockerIndex}
                    className="custom_checkbox"
                    style={{
                      color: locker.defaultChecked ? "red" : "inherit",
                    }}
                  >
                    {locker.label}
                    <input
                      type="checkbox"
                      checked={checkedState[locker.label]}
                      onChange={() => handleCheckboxChange(locker.label)}
                      disabled={locker.defaultChecked}
                    />
                    <span className="checkmark" />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 mb-3">
          <button className="btn btn-primary" onClick={addRow}>
            Add Row
          </button>
          <button className="btn btn-success ml-3" type="button" onClick={handlePayment}>
            Trigger Payment
          </button>
        </div>

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
                  <tr
                    key={index}
                    style={{
                      backgroundColor:
                        new Date(detail.endTime) < new Date() ? "red" : "white",
                    }}
                  >
                    <td>
                      <select
                        value={detail.locker}
                        onChange={(e) => handleLockerSelect(e.target.value, index)}
                        className="form-select"
                        disabled={detail.locker}
                      >
                        <option value="">Select Locker</option>
                        {Object.values(lockerData)
                          .flat()
                          .filter(
                            (locker) =>
                              !checkedState[locker.label] ||
                              locker.label === detail.locker
                          )
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
                        onChange={(e) => handleFieldChange(e, index, "startTime")}
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
                        onClick={() => handleDeleteRow(index, detail.locker)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LockerBooking;
