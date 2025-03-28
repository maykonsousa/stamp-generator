import React, { useRef, useLayoutEffect, useState, useMemo } from "react";

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
  text = "#feliz",
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

  // Usamos useLayoutEffect para medir o texto antes da pintura da tela
  useLayoutEffect(() => {
    if (textPathRef.current) {
      const length = textPathRef.current.getComputedTextLength();
      setTextLength(length);
    }
  }, [text, fontSize, fontFamily]);

  // Função refatorada para calcular os dados do arco, incluindo pontos e path
  const generateArcData = (radiusOffset: number = 0) => {
    if (!textLength) return null;

    const radius = size / 2;
    // O raio do arco é ajustado para que o comprimento se adeque ao texto
    const arcRadius = radius * 0.85 - radiusOffset;
    // Calcula o ângulo do arco baseado no comprimento do texto
    const arcAngle = (textLength / arcRadius) * 0.9; // ajuste o fator se necessário

    const baseAngle = textPosition === "bottom" ? Math.PI : 0;
    const startAngle = baseAngle + (Math.PI - arcAngle) / 2;
    const endAngle = baseAngle - (Math.PI - arcAngle) / 2;

    const startX = radius + arcRadius * Math.cos(startAngle);
    const startY = radius + arcRadius * Math.sin(startAngle);
    const endX = radius + arcRadius * Math.cos(endAngle);
    const endY = radius + arcRadius * Math.sin(endAngle);

    const largeArcFlag = arcAngle > Math.PI ? 1 : 0;
    const sweepFlag = textPosition === "bottom" ? 0 : 1;

    const path = `M ${startX},${startY} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;

    return { path, startX, startY, endX, endY, arcRadius, arcAngle };
  };

  // Memorizamos os cálculos do arco para o fundo e para o caminho do texto
  const arcData = useMemo(
    () => generateArcData(0),
    [textLength, size, textPosition, text]
  );
  const textArcData = useMemo(
    () => generateArcData((textHeight + textPadding * 2) / 2),
    [textLength, size, textPosition, text, textHeight, textPadding]
  );

  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradiente para as pontas do arco */}
        {arcData && (
          <linearGradient
            id="arcGradient"
            gradientUnits="userSpaceOnUse"
            x1={arcData.startX}
            y1={arcData.startY}
            x2={arcData.endX}
            y2={arcData.endY}
          >
            <stop offset="0%" stopColor={textBackgroundColor} stopOpacity="0" />
            <stop
              offset="10%"
              stopColor={textBackgroundColor}
              stopOpacity="1"
            />
            <stop
              offset="90%"
              stopColor={textBackgroundColor}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={textBackgroundColor}
              stopOpacity="0"
            />
          </linearGradient>
        )}
      </defs>

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
      {textLength && arcData && textArcData && (
        <>
          {/* Arco de fundo que se ajusta ao texto com degradê nas pontas */}
          <path
            d={arcData.path}
            stroke={`url(#arcGradient)`}
            strokeWidth={textHeight + textPadding * 2}
            strokeLinecap="round"
            fill="none"
          />

          {/* Caminho para o texto, ajustado para centralização vertical */}
          <path id="textPath" d={textArcData.path} fill="none" stroke="none" />

          {/* Texto curvado, centralizado no arco */}
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
