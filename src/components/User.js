import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h2>Count-2 : {count2}</h2>
      <h2> Name :{name}</h2>
      <h2>Location : {location}</h2>
      <h3>Contact : @Akshaymarch7</h3>
    </div>
  );
};

export default User;
