import React, { useEffect, useState } from "react";
import bus from "../../utils/bus";

import { MessageContainer } from "./MessageStyles";

function Message() {
  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState("");
  let [type, setType] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

  useEffect(() => {
    if (document.querySelector(".close") !== null) {
      document
        .querySelector(".close")
        .addEventListener("click", () => setVisibility(false));
    }
  });

  return (
    visibility && <MessageContainer variant={type}>{message}</MessageContainer>
  );
}

export default Message;
