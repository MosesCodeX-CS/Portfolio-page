import React from 'react';

/**
 * Collection of SVG logos for AI coding tools used throughout the application
 * Each logo function takes a size prop for customizing dimensions
 */

export const CursorLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#3b82f6" />
      <path 
        d="M30 20L70 50L30 80V20Z" 
        fill="white" 
        stroke="white" 
        strokeWidth="4"
      />
      <path 
        d="M65 65L75 75" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export const WindsurfLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#22c55e" />
      <path 
        d="M25 70C25 70 30 30 70 30" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M70 30C70 30 75 60 55 75" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <circle cx="30" cy="65" r="8" fill="white" />
    </svg>
  );
};

export const TraeLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#a855f7" />
      <path 
        d="M25 30H75" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <path 
        d="M50 30V70" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <path 
        d="M35 70H65" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GithubCopilotLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#eab308" />
      <circle cx="35" cy="40" r="12" fill="white" />
      <circle cx="65" cy="40" r="12" fill="white" />
      <path 
        d="M30 60C30 60 40 75 50 75C60 75 70 60 70 60" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
    </svg>
  );
};