"use client";
import { useState } from "react";
import Select from "react-select";
import { register_member } from "@/constants/api"; // assuming this is the function for sending data

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState([]);
  const [emergencyContact, setEmergencyContact] = useState("");

  const categoryOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Rather Not Say", label: "Rather Not Say" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered || isFocused
        ? "#eb675312"
        : undefined,
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const memberInfo = {
      firstName,
      lastName,
      dob,
      contact,
      email,
      gender: gender.map((g) => g.value), // Extract selected gender values
      emergencyContact,
    };

    try {
      await register_member(memberInfo); // Send data to API
      alert("Member information submitted successfully!");
    } catch (error) {
      console.error("Error submitting member info:", error);
      alert("Failed to submit member information.");
    }
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Contact
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Contact"
              required
              pattern="[0-9]{10}"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Gender
            </label>
            <div className="location-area">
              <Select
                name="gender"
                options={categoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
                value={gender}
                onChange={(selected) => setGender(selected)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Emergency Contact
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Emergency Contact"
              required
              pattern="[0-9]{10}"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="ud-btn btn-white2 mb30">
        Register <i className="fal fa-arrow-right-long" />
      </button>
    </form>
  );
};

export default RegistrationForm;
