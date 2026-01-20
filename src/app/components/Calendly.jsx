"use client";
import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  // Use a ref for the root element required by PopupWidget
  const rootRef = React.useRef(null);
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="App calendly-root" ref={rootRef}>
      {isClient && rootRef.current && (
        <PopupWidget
          url="https://calendly.com/cursoraccnt001/new-meeting"
          rootElement={rootRef.current}
          text="Schedule a meeting!"
          textColor="#ffffff"
          color="#0f1e33"
          fontFamily="Comfortaa"
        />
      )}
    </div>
  );
};

export default Calendly;
