import React from "react";

const Notification = ({ message }) => {
  if (message.type === "success") {
    return (
      <div className="container success">{`Add ${message.name}'s number`}</div>
    );
  }

  if (message.type === "update") {
    return (
      <div className="container update">{`Update ${message.name}'s number`}</div>
    );
  }

  if (message.type === "error") {
    return (
      <div className="container error">
        {`Information of ${message.name} has already been removed from the server`}
      </div>
    );
  }

  return;
};

export default Notification;
