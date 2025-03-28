import React, { useRef, useEffect, useState } from "react";

interface CircleStampProps {
  imageUrl: string;
  text?: string;
  size?: number;
  textBackgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
  textPosition?: "bottom" | "top";
  lineHeight?: number;
  textPadding?: number;
}

export const CircleStamp: React.FC<CircleStampProps> = ({
  imageUrl,
  text = "#OPENTOWORK",
  size = 400,
  textBackgroundColor = "#0A66C2",
  textColor = "#FFFFFF",
  fontSize = 36,
  fontFamily = "Arial, sans-serif",
  textPosition = "bottom",
  lineHeight = 1.2,
  textPadding = 8,
}) => {
  const textPathRef = useRef<SVGTextPathElement>(null);
  const [textLength, setTextLength] = useState<number | null>(null);
  const textHeight = fontSize * lineHeight;

  useEffect(() => {
    if (textPathRef.current) {
      const length = textPathRef.current.getComputedTextLength();
      setTextLength(length);
    }
  }, [text, fontSize, fontFamily]);

  const generateArcPath = (radiusOffset: number = 0) => {
    if (!textLength) return "";

    const radius = size / 2;
    const arcRadius = radius * 0.85 - radiusOffset;
    const arcAngle = (textLength / arcRadius) * 0.9;

    const baseAngle = textPosition === "bottom" ? Math.PI : 0;
    const startAngle = baseAngle + (Math.PI - arcAngle) / 2;
    const endAngle = baseAngle - (Math.PI - arcAngle) / 2;

    const startX = radius + arcRadius * Math.cos(startAngle);
    const startY = radius + arcRadius * Math.sin(startAngle);
    const endX = radius + arcRadius * Math.cos(endAngle);
    const endY = radius + arcRadius * Math.sin(endAngle);

    const largeArcFlag = arcAngle > Math.PI ? 1 : 0;
    const sweepFlag = textPosition === "bottom" ? 0 : 1;

    return `M ${startX},${startY} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;
  };

  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Círculo de fundo branco */}
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#FFFFFF" />

      {/* Máscara para a imagem */}
      <clipPath id="imageClip">
        <circle cx={size / 2} cy={size / 2} r={size / 2} />
      </clipPath>

      {/* Imagem central */}
      <image
        href={imageUrl}
        width={size}
        height={size}
        x="0"
        y="0"
        clipPath="url(#imageClip)"
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Medição do texto (hidden) */}
      {!textLength && (
        <svg style={{ visibility: "hidden", position: "absolute" }}>
          <path id="measurePath" d="M 0,0 L 1000,0" />
          <text>
            <textPath ref={textPathRef} href="#measurePath">
              {text}
            </textPath>
          </text>
        </svg>
      )}

      {/* Renderização final */}
      {textLength && (
        <>
          {/* Fundo do texto - altura baseada no lineHeight */}
          <path
            d={generateArcPath()}
            stroke={textBackgroundColor}
            strokeWidth={textHeight + textPadding * 2}
            strokeLinecap="round"
            fill="none"
          />

          {/* Caminho para o texto (centralizado no fundo) */}
          <path
            id="textPath"
            d={generateArcPath((textHeight + textPadding * 2) / 2)}
            fill="none"
            stroke="none"
          />

          {/* Texto curvado */}
          <text
            fill={textColor}
            style={{
              fontSize,
              fontFamily,
              fontWeight: "bold",
            }}
          >
            <textPath
              href="#textPath"
              startOffset="50%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {text}
            </textPath>
          </text>
        </>
      )}
    </svg>
  );
};
