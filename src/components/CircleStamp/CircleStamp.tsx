import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

interface CircleStampProps {
  image: string;
  arcBackgroundColor: string;
  text: string;
  textColor: string;
}

// Componente interno que será renderizado apenas no cliente
const CircleStampContent = ({
  image,
  arcBackgroundColor,
  text,
  textColor,
}: CircleStampProps) => {
  const size = 400; // largura e altura do componente
  const strokeWidth = 40; // largura da linha do arco
  const margin = strokeWidth / 2; // margem para que o arco fique totalmente dentro do círculo
  const center = size / 2; // centro do círculo (200)

  // Apenas o estado do path do arco é necessário
  const [arcPathState, setArcPathState] = React.useState("");

  React.useEffect(() => {
    const arcRadius = center - margin;
    const avgCharWidth = 20;

    // Aumentamos a largura do texto em 30% para fazer o arco mais comprido
    const textWidth = text.length * avgCharWidth * 1.3;
    const arcAngle = textWidth / arcRadius;

    // Alteramos o ângulo central para 45 graus em vez de 90
    const centerAngleDeg = 135;
    const centerAngleRad = (centerAngleDeg * Math.PI) / 180;
    const halfArcAngle = arcAngle / 2;

    const startAngle = centerAngleRad - halfArcAngle;
    const endAngle = centerAngleRad + halfArcAngle;

    const newStartX = center + arcRadius * Math.cos(startAngle);
    const newStartY = center + arcRadius * Math.sin(startAngle);
    const newEndX = center + arcRadius * Math.cos(endAngle);
    const newEndY = center + arcRadius * Math.sin(endAngle);

    const largeArcFlag = arcAngle > Math.PI ? 1 : 0;

    // Atualiza diretamente o path do arco sem salvar as variáveis individualmente
    setArcPathState(
      `M ${newStartX},${newStartY} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},1 ${newEndX},${newEndY}`
    );
  }, [center, margin, text]);

  // Renderização condicional para evitar hidratação incorreta
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Renderiza um placeholder no servidor ou no primeiro render do cliente
  if (!isMounted) {
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
      </div>
    );
  }

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
          <path id="arcPath" d={arcPathState} />
        </defs>
        {/* Desenha o arco (o background para o texto) */}
        <path
          d={arcPathState}
          fill="none"
          stroke={arcBackgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Adiciona o texto seguindo o arco */}
        <text
          fill={textColor}
          fontSize="24"
          fontWeight="bold"
          dy="10" // Desloca o texto para cima em 10 unidades
        >
          <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

// Exporta uma versão do componente que será carregada apenas no cliente
// com renderização somente do lado do cliente
const CircleStamp = dynamic(() => Promise.resolve(CircleStampContent), {
  ssr: false,
});

export { CircleStamp };
