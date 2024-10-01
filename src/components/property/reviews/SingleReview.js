import React from "react";

const reviews = [
  {
    name: "Bessie Cooper",
    date: "12 March 2022",
    rating: 5,
    text: "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
  },
  {
    name: "Darrell Steward",
    date: "12 March 2022",
    rating: 5,
    text: "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
  },
];

const SingleReview = () => {
  return (
    <>
      {reviews.map((review, index) => (
        <div className="col-md-12" key={index}>
          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
            <div className="ml20">
              <h6 className="mt-0 mb-0">{review.name}</h6>
              <div>
                <span className="fz14">{review.date}</span>
                <div className="blog-single-review">
                  <ul className="mb0 ps-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <li className="list-inline-item me-0" key={i}>
                        <a href="#">
                          <i className="fas fa-star review-color2 fz10" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End .d-flex */}

          <p className="text mt20 mb20">{review.text}</p>

          <div className="review_cansel_btns d-flex bdrb1 pb30">
            <a href="#">
              <i className="fas fa-thumbs-up" />
              Helpful
            </a>
            <a href="#">
              <i className="fas fa-thumbs-down" />
              Not helpful
            </a>
          </div>
        </div>
      ))}

      <div className="col-md-12">
        <div className="position-relative bdrb1 pt30 pb20">
          <a href="#" className="ud-btn btn-white2">
            Show all 134 reviews
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
