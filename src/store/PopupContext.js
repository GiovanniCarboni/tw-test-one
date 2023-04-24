import React, { useState } from "react";

const PopupContext = React.createContext({
  isDisplayed: false,
  displayMsg: (msg) => {},
  onClose: () => {},
});

let timer;

export function PopupContextProvider({ children }) {
  const [message, setMessage] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleDisplay = (message) => {
    setMessage(message);
    setIsDisplayed(true);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    clearTimeout(timer);
    setIsDisplayed(false);
  };

  return (
    <PopupContext.Provider
      value={{
        message,
        isDisplayed,
        displayMessage: handleDisplay,
        onClose: handleClose,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export default PopupContext;
