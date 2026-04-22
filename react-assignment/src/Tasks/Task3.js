import React from "react";

function Task3() {
  const hour = new Date().getHours();

  let message = "";

  if (hour < 12) {
    message = "Good Morning 🌅";
  } else if (hour < 18) {
    message = "Good Afternoon ☀️";
  } else {
    message = "Good Evening 🌙";
  }

  return (
    <div className="card">
      <h2>Greeting</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default Task3;