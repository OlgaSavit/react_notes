import {ErrorBoundary} from "./services/ErrorBoundary";
import React from "react";
import MainPage from "./pages/layout";
import CatalogPage from "./pages/catalog";
// import {Provider} from "./services/Context";
import {Provider} from "react-redux";
import store from "./store";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import RouterComponent from "./router";
function App() {

  return (

          <Provider store={store}>
              <ErrorBoundary>
                  <Router>
                      <RouterComponent></RouterComponent>
                      {/*<CatalogPage text={'CatalogPage'} />*/}
                  </Router>
              </ErrorBoundary>
          </Provider>


  );
}

export default App;
