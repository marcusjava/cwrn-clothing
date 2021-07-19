import React from "react";

import "./styles.scss";

function CustomButton({
  children,
  isGoogleButton,
  inverted = false,
  ...props
}) {
  return (
    <button
      className={`${isGoogleButton && "google-button"} ${
        inverted && "inverted"
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
