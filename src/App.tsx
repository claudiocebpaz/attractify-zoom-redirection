// import React from "react";
import CountdownRedirect from "./components/CountdownRedirect";
import RedirectButton from "./components/RedirectButton";

// Configuración global de la redirección
const redirectUrl = "https://www.example.com";
const initialCountdown = 2; // Tiempo en segundos

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <RedirectButton redirectUrl={redirectUrl} />
      <CountdownRedirect redirectUrl={redirectUrl} initialCountdown={initialCountdown} />
    </div>
  );
};

export default App;