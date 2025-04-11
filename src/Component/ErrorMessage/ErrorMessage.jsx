import React from "react";

const ErrorMessage = ({ message = "Щось пішло не так. Спробуй ще раз." }) => {
  return <p style={{ color: "red", textAlign: "center" }}>{message}</p>;
};

export default ErrorMessage;
