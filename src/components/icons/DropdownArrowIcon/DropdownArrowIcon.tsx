import React from 'react';

export const DropdownArrowIcon = ({ color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
      <mask id="mask0_4206_3593" maskUnits="userSpaceOnUse" x="-4" y="-3" width="17" height="17">
        <rect x="-3.5" y="-2.5" width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_4206_3593)">
        <path d="M4.5 2.5L0.5 6.5H8.5L4.5 2.5Z" fill={color} />
      </g>
    </svg>
  );
};
