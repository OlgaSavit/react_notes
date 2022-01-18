import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import React from "react";

const spin = keyframes`
 0% { transform: rotate(0deg)}
 100% { transform: rotate(360deg)}
`;
export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;

export function FullSpinner({small=false}) {

    return (
        <div
            style={{
                fontSize: "4em",
                height: small?'50px':'100vh',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Spinner aria-label="loading" />
        </div>
        //todo
    );
}
