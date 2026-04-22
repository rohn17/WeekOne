import React from "react";

function Task5({ name, age, email }) {
  return (
    <div className="card user-card">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Task5;