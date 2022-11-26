import React from "react";
import "./Message.scss";

const Message = () => {
  return (
    <div className="main-message-container">
      <div className="message-img-container">
        <img src="" alt="" />
      </div>
      <div>
        <div className="message-information">
          <h3 className="message-sender">Rey Chaabani</h3>
          <p className="message-time">19:09</p>
        </div>
        <p className="message-text">hej hå</p>
      </div>
    </div>
  );
};

export default Message;
