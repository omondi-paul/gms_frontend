import React from "react";

const WorkoutPlanDetails = () => {
  const columns = [
    [
      {
        label: "Plan ID",
        value: "WP1001",
      },
      {
        label: "Price",
        value: "$49.99/month",
      },
      {
        label: "Duration",
        value: "12 Weeks",
      },
      {
        label: "Workouts per Week",
        value: "4",
      },
      {
        label: "Fitness Level",
        value: "All Levels",
      },
    ],
    [
      {
        label: "Nutrition Plan",
        value: "Included",
      },
      {
        label: "Trainer Support",
        value: "24/7 Access",
      },
      {
        label: "Access to Videos",
        value: "Yes",
      },
      {
        label: "Progress Tracking",
        value: "Weekly Check-ins",
      },
      {
        label: "Community Access",
        value: "Members Only",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlanDetails;
