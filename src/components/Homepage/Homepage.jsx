import React from "react";

const videoSrc = "./earth-rotation.mp4";

function Homepage() {
  return (
    <>
      <div className="col-lg-6 col-12 mx-auto">
        <h1 className="text-white mt-2 mb-4 pb-2 text-center">Stay tuned!</h1>

        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <ul className="countdown d-flex flex-wrap align-items-center justify-content-center">
            <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
              <h2 className="countdown-title days">14</h2>
              <span className="countdown-text">Days</span>
            </li>

            <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
              <h2 className="countdown-title hours">10</h2>
              <span className="countdown-text">Hours</span>
            </li>

            <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
              <h2 className="countdown-title minutes">15</h2>
              <span className="countdown-text">Minutes</span>
            </li>

            <li className="countdown-item d-flex flex-column justify-content-center align-items-center">
              <h2 className="countdown-title seconds">34</h2>
              <span className="countdown-text">Seconds</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
