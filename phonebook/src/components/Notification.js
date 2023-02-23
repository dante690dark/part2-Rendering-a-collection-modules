import React from "react";

function Notification({ message, stateMessages }) {
  if (message === null) {
    return null;
  }

  return (
    <>
      {stateMessages ? (
        <div className={message && "success"}>{message}</div>
      ) : (
        <div className={message && "error"}>{message}</div>
      )}
    </>
  );
}

export default Notification;
