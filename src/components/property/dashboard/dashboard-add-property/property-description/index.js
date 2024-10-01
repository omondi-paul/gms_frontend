"use client";
import Select from "react-select";

const PropertyDescription = () => {
  const catergoryOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Rather Not Say", label: "Rather Not Say" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="form-style1">
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
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
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
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Date Of Joining
            </label>
            <input
              type="date"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PropertyDescription;
