import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  FaRegStar,
  FaStar,
  FaStarAndCrescent,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";

const Reviews = ({ rating }) => {
  const [stars, setStars] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getStars(router.locale);
  }, [router.locale]);

  const getStars = (lang) => {
    // 0 => empty
    // 0.5 => half star
    // 1 => full star
    let starsTypes = [];
    // star num 1
    if (rating < 0.5) {
      starsTypes[0] = 0.5;
    } else {
      starsTypes[0] = 1;
    }
    // star num 2
    if (rating < 1.5) {
      starsTypes[1] = 0;
    } else if (rating < 2) {
      starsTypes[1] = 0.5;
    } else {
      starsTypes[1] = 1;
    }
    // star num 3
    if (rating < 2.5) {
      starsTypes[2] = 0;
    } else if (rating < 3) {
      starsTypes[2] = 0.5;
    } else {
      starsTypes[2] = 1;
    }
    // star num 4
    if (rating < 3.5) {
      starsTypes[3] = 0;
    } else if (rating < 4) {
      starsTypes[3] = 0.5;
    } else {
      starsTypes[3] = 1;
    }
    // star num 5
    if (rating < 4.5) {
      starsTypes[4] = 0;
    } else if (rating < 5) {
      starsTypes[4] = 0.5;
    } else {
      starsTypes[4] = 1;
    }

    // no stars
    // if (rating<= 0) {
    //   starsTypes[0] = 0;
    // }

    if (lang == "ar") {
      starsTypes.reverse();
    }

    setStars(starsTypes);
  };
  return (
    <div className="flex items-center">
      {stars &&
        stars.length > 0 &&
        stars.map((star, ix) => {
          if (star == 0) {
            return <FaStar className="me-0.5 text-gray-300" key={ix} />;
          } else if (star == 0.5) {
            return (
              <FaStarHalfAlt className="me-0.5 text-yellow-500" key={ix} />
            );
          } else {
            return <FaStar className="me-0.5 text-yellow-500" key={ix} />;
          }
        })}
    </div>
  );
};

export default Reviews;
