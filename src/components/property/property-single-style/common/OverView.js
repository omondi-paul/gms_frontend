import listings from "@/data/workout_plans";
import React from "react";

const OverView = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Duration (Weeks)",
      value: data.duration,
    },
    {
      icon: "flaticon-shower",
      label: "Sessions per Week",
      value: data.sessionsPerWeek,
    },
    {
      icon: "flaticon-event",
      label: "Start Date",
      value: data.startDate,
    },
    {
      icon: "flaticon-garage",
      label: "Intensity Level",
      value: data.intensityLevel,
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Total Workouts",
      value: data.totalWorkouts,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Workout Type",
      value: data.workoutType,
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
