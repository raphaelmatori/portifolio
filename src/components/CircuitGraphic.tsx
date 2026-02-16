import React from 'react';

const SIZE = 220;
const CENTER = SIZE / 2;
const CHIP_SIZE = 80;
const NODE_RADIUS = 8;
const STROKE_WIDTH = 2;

const nodePositions = [
  [CENTER - 85, CENTER - 70],
  [CENTER + 75, CENTER - 60],
  [CENTER - 70, CENTER + 65],
  [CENTER + 70, CENTER + 55],
  [CENTER - 95, CENTER],
  [CENTER + 90, CENTER],
];

const lineSegments: [number, number, number, number][] = [
  [CENTER - CHIP_SIZE / 2, CENTER - CHIP_SIZE / 2, nodePositions[0][0], nodePositions[0][1]],
  [CENTER + CHIP_SIZE / 2, CENTER - CHIP_SIZE / 2, nodePositions[1][0], nodePositions[1][1]],
  [CENTER - CHIP_SIZE / 2, CENTER + CHIP_SIZE / 2, nodePositions[2][0], nodePositions[2][1]],
  [CENTER + CHIP_SIZE / 2, CENTER + CHIP_SIZE / 2, nodePositions[3][0], nodePositions[3][1]],
  [CENTER - CHIP_SIZE / 2, CENTER, nodePositions[4][0], nodePositions[4][1]],
  [CENTER + CHIP_SIZE / 2, CENTER, nodePositions[5][0], nodePositions[5][1]],
];

export const CircuitGraphic: React.FC = () => (
  <svg
    width={SIZE}
    height={SIZE}
    viewBox={`0 0 ${SIZE} ${SIZE}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="circuit-graphic"
    aria-hidden
  >
    <defs>
      <linearGradient id="chip-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3aefff" stopOpacity="1" />
        <stop offset="50%" stopColor="#0d8eff" stopOpacity="1" />
        <stop offset="100%" stopColor="#034096" stopOpacity="1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {lineSegments.map(([x1, y1, x2, y2], index) => (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(25, 230, 255, 0.75)"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
      />
    ))}

    {nodePositions.map(([cx, cy], index) => (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r={NODE_RADIUS}
        fill="rgba(25, 230, 255, 0.4)"
        stroke="rgba(25, 230, 255, 0.9)"
        strokeWidth={1.5}
      />
    ))}

    <rect
      x={CENTER - CHIP_SIZE / 2}
      y={CENTER - CHIP_SIZE / 2}
      width={CHIP_SIZE}
      height={CHIP_SIZE}
      rx={12}
      fill="url(#chip-glow)"
      filter="url(#glow)"
    />
    <rect
      x={CENTER - CHIP_SIZE / 2 + 8}
      y={CENTER - CHIP_SIZE / 2 + 8}
      width={CHIP_SIZE - 16}
      height={CHIP_SIZE - 16}
      rx={8}
      stroke="rgba(255, 255, 255, 0.5)"
      strokeWidth={1}
      fill="none"
      strokeDasharray="4 2"
    />
    <text
      x={CENTER}
      y={CENTER + 5}
      textAnchor="middle"
      fill="#ffffff"
      fontSize="28"
      fontWeight="700"
      fontFamily="system-ui, sans-serif"
    >
      {'</>'}
    </text>
  </svg>
);
