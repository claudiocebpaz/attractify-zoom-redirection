import React from "react";

type RedirectButtonProps = {
  redirectUrl: string;
};

const RedirectButton = ({ redirectUrl }: RedirectButtonProps) => {
  const handleClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 w-56 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-600 transition"
    >
      Join Zoom Now
    </button>
  );
};

export default RedirectButton;