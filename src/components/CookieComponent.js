import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
      buttonStyle={{
        backgroundColor: "var(--ifm-color-primary)",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        textAlign: "center",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookies;
