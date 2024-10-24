import React from "react";

export const AmericanSVG = ({ ...props }) => (
  <svg
    width="300"
    height="20"
    viewBox="0 0 300 200"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="300" height="200" fill="#B22234" />
    <rect width="300" height="20" y="20" fill="#FFFFFF" />
    <rect width="300" height="20" y="40" fill="#B22234" />
    <rect width="300" height="20" y="60" fill="#FFFFFF" />
    <rect width="300" height="20" y="80" fill="#B22234" />
    <rect width="300" height="20" y="100" fill="#FFFFFF" />
    <rect width="300" height="20" y="120" fill="#B22234" />
    <rect width="300" height="20" y="140" fill="#FFFFFF" />
    <rect width="300" height="20" y="160" fill="#B22234" />
    <rect width="120" height="140" fill="#3C3B6E" />
    {Array.from({ length: 9 }).map((_, rowIndex) => (
      <g key={rowIndex}>
        {Array.from({ length: rowIndex % 2 === 0 ? 6 : 5 }).map(
          (_, starIndex) => (
            <polygon
              key={starIndex}
              points="2,0 0.6,1.5 0,0.6 1.5,0.6 0.6,1.5"
              fill="#FFFFFF"
              transform={`translate(${
                (rowIndex % 2 === 0 ? 0 : 30) + starIndex * 24
              }, ${rowIndex * 15})`}
            />
          )
        )}
      </g>
    ))}
  </svg>
);
export const GermanFlag = ({ ...props }) => (
  <svg
    {...props}
    width="300"
    height="200"
    viewBox="0 0 300 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="15" height="10" fill="#000000" />
    <rect width="15" height="10" y="10" fill="#FF0000" />
    <rect width="15" height="10" y="20" fill="#FFD700" />
  </svg>
);
