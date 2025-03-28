import React from "react";
import Image from "next/image";

interface CircleStampProps {
  image: string;
  arcBackgroundColor: string;
  text: string;
  textColor: string;
}

export const CircleStamp = ({
  image,
  arcBackgroundColor,
  text,
  textColor,
}: CircleStampProps) => {
  const size = 400; // largura e altura do componente
  const strokeWidth = 40; // largura da linha do arco
  const margin = strokeWidth / 2; // margem para que o arco fique totalmente dentro do círculo
  const center = size / 2; // centro do círculo (200)
  const arcRadius = center - margin; // raio para o arco, de forma que sua borda externa coincida com o limite do círculo (200 - 20 = 180)

  // Estimativa da largura do texto (em pixels) com base em um valor médio por caractere
  const avgCharWidth = 16; // ajuste conforme a fonte usada
  const textWidth = text.length * avgCharWidth;

  // O ângulo necessário (em radianos) para cobrir o comprimento do texto no arco
  const arcAngle = textWidth / arcRadius;

  // Define o ângulo central do arco em que o texto ficará posicionado.
  // Aqui usamos 90° (ou π/2 radianos), o que posiciona o arco na parte inferior do círculo.
  const centerAngleDeg = 90;
  const centerAngleRad = (centerAngleDeg * Math.PI) / 180;
  const halfArcAngle = arcAngle / 2;

  // Calcula os ângulos de início e fim (em radianos)
  const startAngle = centerAngleRad - halfArcAngle;
  const endAngle = centerAngleRad + halfArcAngle;

  // Calcula as coordenadas de início e fim para o comando do arco
  const startX = center + arcRadius * Math.cos(startAngle);
  const startY = center + arcRadius * Math.sin(startAngle);
  const endX = center + arcRadius * Math.cos(endAngle);
  const endY = center + arcRadius * Math.sin(endAngle);

  // Define o flag de "large arc" (1 se o ângulo for maior que 180°)
  const largeArcFlag = arcAngle > Math.PI ? 1 : 0;

  // Cria o caminho (path) do arco
  const arcPath = `M ${startX},${startY} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},1 ${endX},${endY}`;

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt="profile"
        fill
        unoptimized
        style={{
          objectFit: "cover",
        }}
      />
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <path id="arcPath" d={arcPath} />
        </defs>
        {/* Desenha o arco (o background para o texto) */}
        <path
          d={arcPath}
          fill="none"
          stroke={arcBackgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Adiciona o texto seguindo o arco */}
        <text fill={textColor} fontSize="24" fontWeight="bold">
          <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
