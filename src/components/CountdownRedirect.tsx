import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

type CountdownRedirectProps = {
  redirectUrl: string;
  initialCountdown: number;
};

const CountdownRedirect = ({ redirectUrl, initialCountdown }: CountdownRedirectProps) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    // Intervalo para actualizar el contador
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Temporizador para redirigir
    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, initialCountdown * 1000);

    // Limpieza de intervalos y temporizadores al desmontar
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [redirectUrl, initialCountdown]);

  return (
    <div className="flex items-center space-x-4 my-4">
      <Spinner />
      <span className="text-xl font-medium text-gray-700">
        Joining in {countdown} second{countdown !== 1 && "s"}...
      </span>
    </div>
  );
};

export default CountdownRedirect;