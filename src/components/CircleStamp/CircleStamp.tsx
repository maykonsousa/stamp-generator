import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

interface CircleStampProps {
  image: string;
  arcBackgroundColor: string;
  text: string;
  textColor: string;
}

const CircleStampContent = ({
  image,
  arcBackgroundColor,
  text,
  textColor,
}: CircleStampProps) => {
  const size = 400;
  const strokeWidth = 40;
  const margin = strokeWidth / 2;
  const center = size / 2;

  const [arcPathState, setArcPathState] = React.useState("");

  React.useEffect(() => {
    const arcRadius = center - margin;
    const avgCharWidth = 16;

    let textWidthFactor;

    if (text.length <= 10) {
      textWidthFactor = text.length;
    } else {
      textWidthFactor = 10 + (text.length - 10) * 0.7;
    }

    const textWidth = textWidthFactor * avgCharWidth * 1.4;
    const arcAngle = textWidth / arcRadius;

    const maxAngle = 240 * (Math.PI / 180);
    const finalArcAngle = Math.min(arcAngle, maxAngle);

    const centerAngleDeg = 135;
    const centerAngleRad = (centerAngleDeg * Math.PI) / 180;
    const halfArcAngle = finalArcAngle / 2;

    const startAngle = centerAngleRad + halfArcAngle;
    const endAngle = centerAngleRad - halfArcAngle;

    const newStartX = center + arcRadius * Math.cos(startAngle);
    const newStartY = center + arcRadius * Math.sin(startAngle);
    const newEndX = center + arcRadius * Math.cos(endAngle);
    const newEndY = center + arcRadius * Math.sin(endAngle);

    const largeArcFlag = finalArcAngle > Math.PI ? 1 : 0;

    setArcPathState(
      `M ${newStartX},${newStartY} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},0 ${newEndX},${newEndY}`
    );
  }, [center, margin, text]);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

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
        <path
          d={arcPathState}
          fill="none"
          stroke={arcBackgroundColor}
          strokeWidth={strokeWidth}
        />
        <text fill={textColor} fontSize="24" fontWeight="bold" dy="10">
          <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const CircleStamp = dynamic(() => Promise.resolve(CircleStampContent), {
  ssr: false,
});

export { CircleStamp };
