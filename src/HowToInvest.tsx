import React from "react";
import InvestPoint from "./InvestPoint";
import InvestPoints from "./InvestPoints";

const HowToInvest: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {InvestPoints.map((point, index) => (
        <InvestPoint
          key={index}
          title={point.title}
          point={point.point}
          style={{ animationDelay: `${index * 0.3}s` }} // Agregar retraso
          className="fade-in" // Agregar clase de animación
        />
      ))}
    </div>
  );
};

export default HowToInvest;