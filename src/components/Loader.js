import React from "react";

function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      version="1"
      viewBox="0 0 128 128"
    >
      <rect width="100%" height="100%" fill="#FFF"></rect>
      <g>
        <path d="M31.6 8.98a4.02 4.02 0 001.7 5.3l6.12 3.22a52.56 52.56 0 1063.13 10.73L96 33.97a43.88 43.88 0 11-53-8.5l-3.65 7.4a4.02 4.02 0 001.72 5.3 3.73 3.73 0 005.13-1.67l7.66-15.63a4.18 4.18 0 00-1.75-5.4L36.74 7.32a3.73 3.73 0 00-5.13 1.66z"></path>
        <animateTransform
          attributeName="transform"
          dur="1800ms"
          from="0 64 64"
          repeatCount="indefinite"
          to="360 64 64"
          type="rotate"
        ></animateTransform>
      </g>
    </svg>
  );
}

export default Loader;