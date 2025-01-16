import React from "react";
import CountdownRedirect from "./components/CountdownRedirect";
import RedirectButton from "./components/RedirectButton";
import config from "./config.json"; // Importa el archivo JSON

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <RedirectButton redirectUrl={config.redirectUrl} />
      <CountdownRedirect
        redirectUrl={config.redirectUrl}
        initialCountdown={config.initialCountdown}
      />
    </div>
  );
};

export default App;