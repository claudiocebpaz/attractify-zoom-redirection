import React from "react";
import imageSrc from "../assets/gradientlogo.svg"; // Importa la imagen

const CenteredImageAboveButton = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Imagen centrada */}
      <img
        src={imageSrc}
        alt="Centered Above Button"
        className="object-contain transform w-1/2 sm:w-3/4"
      />
    </div>
  );
};

export default CenteredImageAboveButton;