import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, Price, customer, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {Price} RS
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {customer} Sold
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Order Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
