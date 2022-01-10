import React from "react";

export const LikedSVG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path
        d="M7 3c-1.536 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.535 3 7 3z"
        fill="#e74c3c"
      />
    </svg>
  );
};

const LikedMovies = () => {
  return (
    <>
      <span>Add to Liked</span>
      <LikedSVG />
    </>
  );
};

export default LikedMovies;