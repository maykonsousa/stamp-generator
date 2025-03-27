"use client";
import React, { useEffect, useRef } from "react";

interface CurvedTextCanvasProps {
  text: string;
  size?: number;
  radius?: number;
  startAngle?: number; // em graus
  arcAngle?: number; // em graus
  fontSize?: number;
  textColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  fontWeight?: string | number;
  fontFamily?: string;
}

export const CurvedTextCanvas: React.FC<CurvedTextCanvasProps> = ({
  text = "#OPENTOWORK",
  size = 400,
  radius = 180,
  startAngle = 90,
  arcAngle = 180,
  fontSize = 30,
  textColor = "#FFFFFF",
  strokeWidth = 35,
  backgroundColor = "#4B9429",
  fontWeight = 700,
  fontFamily = "sans-serif",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = size / 2;
    const centerY = size / 2;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const arcAngleRad = (arcAngle * Math.PI) / 180;

    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = "middle";

    // --- Arco de fundo ---
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.beginPath();
    ctx.arc(0, 0, radius, startAngleRad, startAngleRad + arcAngleRad, false);
    ctx.strokeStyle = backgroundColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore();

    // --- Texto no arco ---
    const chars = text.split(""); // ordem natural
    const angleStep = arcAngleRad / chars.length; // sentido horário

    ctx.save();
    ctx.translate(centerX, centerY);

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const angle = startAngleRad + i * angleStep;

      ctx.save();
      ctx.rotate(angle);
      ctx.fillText(char, 0, -radius);
      ctx.restore();
    }

    ctx.restore();
  }, [
    text,
    size,
    radius,
    startAngle,
    arcAngle,
    fontSize,
    textColor,
    strokeWidth,
    backgroundColor,
    fontWeight,
    fontFamily,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
