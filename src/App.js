import React, {Suspense} from "react";
import {ErrorBoundary} from "./services/ErrorBoundary";
import {Provider} from "react-redux";
import store from "./store";
import {ChakraProvider, Container} from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import RouterComponent from "./router";
import  {FullSpinner} from "./services/Spinner";
import {ToastContainer} from "react-toastify";
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
}
const theme = extendTheme({ colors })

function App() {
  return (
          <Provider store={store}>
              <ErrorBoundary>
                  <ChakraProvider theme={theme}>
                      <Suspense fallback={<FullSpinner />}>
                          <RouterComponent/>
                          <ToastContainer type="success"/>
                      </Suspense>
                  </ChakraProvider>
              </ErrorBoundary>
          </Provider>


  );
}

export default App;

