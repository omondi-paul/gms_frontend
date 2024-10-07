import React from "react";

const WorkOutDescriptions = () => {
  return (
    <>
      <p className="text mb10">
        Our comprehensive workout plan is designed to help you achieve your fitness goals. With a balanced mix of strength training, cardio, and flexibility exercises, this program caters to all fitness levels. You can enjoy working out in a motivating environment, complete with expert guidance and support. Each session is structured to maximize your results while keeping you engaged and motivated.
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            >
              <div className="accordion-body p-0">
                <p className="text">
                  This workout plan includes detailed descriptions of each exercise, along with instructional videos to guide you through your routine. Additionally, we provide nutritional guidance to complement your workouts, ensuring you have the energy and nutrients needed for optimal performance. With our flexible schedule, you can fit workouts into your busy life while tracking your progress along the way.
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Show more
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOutDescriptions;
