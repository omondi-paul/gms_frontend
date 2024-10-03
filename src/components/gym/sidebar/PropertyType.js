// 'use client'

// import React from "react";

// const ClassSchedule = ({filterFunctions}) => {

//   const options = [

//     { label: "Houses" },

//     { label: "Apartments", defaultChecked: true },
//     { label: "Office" },
//     { label: "Villa" },
   
//   ];

//   return (
//     <>
//     <label className="custom_checkbox"  >
//           All
//           <input type="checkbox"
//           checked={!filterFunctions?.classSchedules.length}
//           onChange={(e=>{filterFunctions?.setClassSchedules([])})}
//   />
//           <span className="checkmark" />
//         </label>
//       {options.map((option, index) => (
//         <label className="custom_checkbox" key={index} >
//           {option.label}
//           <input type="checkbox"
//           checked={filterFunctions?.classSchedules.includes(option.label)}
//           onChange={(e=>{filterFunctions.handleclassSchedules(option.label)})}
//   />
//           <span className="checkmark" />
//         </label>
//       ))}
//     </>
//   );
// };

// export default ClassSchedule;
