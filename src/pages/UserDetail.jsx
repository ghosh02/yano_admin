import React from "react";
import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const { user } = location.state;

  //   console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <h1>{user.fullName}</h1>
          <p>Country: {user.country}</p>
          <p>Type: {user.type}</p>
          <p>Last Active: {user.lastTimeActive}</p>
          <p>Sessions: {user?.sessions}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
