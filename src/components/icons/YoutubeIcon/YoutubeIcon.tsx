import React from 'react';

export const YoutubeIcon = ({ color = 'currentColor' }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1833_5695" maskUnits="userSpaceOnUse" x="3" y="5" width="26" height="22">
        <path
          d="M16 6.6665C28 6.6665 28 6.6665 28 15.9998C28 25.3332 28 25.3332 16 25.3332C4 25.3332 4 25.3332 4 15.9998C4 6.6665 4 6.6665 16 6.6665Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.3334 11.333L21.3334 15.9997L13.3334 20.6663V11.333Z" fill="black" />
      </mask>
      <g mask="url(#mask0_1833_5695)">
        <path d="M32 0H0V32H32V0Z" fill={color} />
      </g>
    </svg>
  );
};
