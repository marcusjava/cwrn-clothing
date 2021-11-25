import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./styles/spinner";

// import { Container } from './styles';

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default WithSpinner;
