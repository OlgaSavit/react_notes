import {ErrorBoundary} from "./services/ErrorBoundary";
import React, {useEffect} from "react";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import RouterComponent from "./router";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "./style/theme";
function App() {

  return (
          <Provider store={store}>
              <ErrorBoundary>
                  <ThemeProvider theme={theme}>
                    <ThemeComponent/>
                      <Router>
                          <RouterComponent></RouterComponent>
                          {/*<CatalogPage text={'CatalogPage'} />*/}
                      </Router>
                  </ThemeProvider>

              </ErrorBoundary>
          </Provider>


  );
}

export default App;

const ThemeComponent=()=>{
    const state = useSelector((state) => state);
    let {theme}=state;
    return(
        <GlobalStyle light={theme==='light'?true:false}/>
    )
}