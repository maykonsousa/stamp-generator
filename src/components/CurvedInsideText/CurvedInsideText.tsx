import React from "react";
import { Box } from "@mui/material";

interface CurvedInsideTextProps {
  text: string;
  radius?: number;
  startAngle?: number;
  kerning?: number;
  fontSize?: number;
  textColor?: string;
  charRotation?: number;
  fontWeight?: number | string;
  backgroundColor?: string;
}

export const CurvedInsideText = ({
  text,
  radius = 100,
  startAngle = -90,
  kerning = 0.25,
  fontSize = 16,
  textColor = "#000000",
  charRotation = 90,
  fontWeight = "bold",
  backgroundColor = "transparent",
}: CurvedInsideTextProps) => {
  const formattedText = text.startsWith("#") ? text : `#${text}`;
  const chars = formattedText.split("");
  const totalAngle = (chars.length * kerning) % 360;

  // Aumentando o raio base para aproximar da borda
  const baseRadius = radius * 2; // Aumentando o raio em 15%

  const createCurvedText = () => {
    return chars.map((char, i) => {
      const angle = startAngle - (i * totalAngle) / chars.length;
      const radians = (angle * Math.PI) / 180;
      const x = baseRadius * Math.cos(radians);
      const y = baseRadius * Math.sin(radians);

      return (
        <text
          key={`${char}-${i}`}
          x={x}
          y={y}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={textColor}
          style={{
            transform: `rotate(${angle + charRotation}deg)`,
            transformOrigin: `${x}px ${y}px`,
          }}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {char}
        </text>
      );
    });
  };

  // Calculando os pontos do arco de fundo com ajuste maior nos ângulos
  const backgroundStartAngle = startAngle + 10; // Aumentando o ajuste do ângulo inicial
  const backgroundEndAngle = startAngle - totalAngle - 5;

  const startRad = (backgroundStartAngle * Math.PI) / 180;
  const endRad = (backgroundEndAngle * Math.PI) / 180;

  const startX = baseRadius * Math.cos(startRad);
  const startY = baseRadius * Math.sin(startRad);
  const endX = baseRadius * Math.cos(endRad);
  const endY = baseRadius * Math.sin(endRad);

  const maxRadius = baseRadius + fontSize;

  const gradientId = `path-gradient-${text.replace(/[^a-zA-Z0-9]/g, "")}`;

  const angleRad = Math.abs(endRad - startRad);
  const gradientX1 = baseRadius * Math.cos(startRad + angleRad * 0.1);
  const gradientY1 = baseRadius * Math.sin(startRad + angleRad * 0.1);
  const gradientX2 = baseRadius * Math.cos(endRad - angleRad * 0.1);
  const gradientY2 = baseRadius * Math.sin(endRad - angleRad * 0.1);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox={`${-maxRadius} ${-maxRadius} ${maxRadius * 2} ${
          maxRadius * 2
        }`}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <clipPath id="textClip">
            <path
              d={`
                M ${startX} ${startY}
                A ${baseRadius} ${baseRadius} 0 ${
                totalAngle > 180 ? "1" : "0"
              } 0 ${endX} ${endY}
              `}
            />
          </clipPath>
          <linearGradient
            id={gradientId}
            x1={gradientX1}
            y1={gradientY1}
            x2={gradientX2}
            y2={gradientY2}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={backgroundColor} stopOpacity="0.3" />
            <stop offset="20%" stopColor={backgroundColor} stopOpacity="1" />
            <stop offset="80%" stopColor={backgroundColor} stopOpacity="1" />
            <stop offset="100%" stopColor={backgroundColor} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g>
          <path
            d={`
              M ${startX} ${startY}
              A ${baseRadius} ${baseRadius} 0 ${
              totalAngle > 180 ? "1" : "0"
            } 0 ${endX} ${endY}
            `}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={fontSize}
            strokeLinecap="round"
          />
        </g>
        <g style={{ isolation: "isolate" }}>{createCurvedText()}</g>
      </svg>
    </Box>
  );
};
