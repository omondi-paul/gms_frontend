"use client";
import Select from "react-select";

const Membership = () => {
  const membershipTypes = [
    { value: "Basic", label: "Basic" },
    { value: "Standard", label: "Standard" },
    { value: "Executive", label: "Executive"},
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
      <div className="col-sm-6 col-xl-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Membership Type
            </label>
            <div className="location-area">
              <Select
                name="membership"
                options={membershipTypes}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-6">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Membership Date
            </label>
            <input
              type="date"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-6">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Expiry Date
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

export default Membership;
