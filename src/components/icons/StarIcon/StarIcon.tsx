import React from 'react';

export const StarIcon = ({ color = 'currentColor', offset = 1 }) => {
  const id = React.useId();

  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.844 19.1547L5.49733 12.0707L0 7.308L7.24133 6.68133L10.0773 0L12.9133 6.68L20.1533 7.30667L14.6573 12.0693L16.3107 19.1533L10.0773 15.3933L3.844 19.1547Z"
        fill={`url(#${id})`}
      />
      <path
        d="M5.87733 16.3573L10.0773 13.824L14.2773 16.3907L13.1773 11.5907L16.8773 8.39067L12.0107 7.95733L10.0773 3.424L8.144 7.924L3.27733 8.35733L6.97733 11.5907L5.87733 16.3573ZM3.844 19.1547L5.49733 12.0707L0 7.308L7.24133 6.68133L10.0773 0L12.9133 6.68L20.1533 7.30667L14.6573 12.0693L16.3107 19.1533L10.0773 15.3933L3.844 19.1547Z"
        fill={color}
      />
      <defs>
        <linearGradient id={id} x1="0" y1="10" x2="20" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} />
          <stop offset={offset} stopColor={color} />
          <stop offset={offset} stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
