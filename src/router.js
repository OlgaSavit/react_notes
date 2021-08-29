import {
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./pages/layout";
import CatalogPage from "./pages/catalog";
import {useSelector} from "react-redux";
import RegistrationPage from "./pages/auth/RegistrationPage";

const RouterComponent=()=>{

    const state = useSelector((state) => state);
    console.log('state',state)
    return(
        <Switch>
            <Route path='/' exact>
                {
                    state.auth? <MainPage/>:<RegistrationPage/>
                }
            </Route>
            <Route path='/catalog'>
                {state.auth? <CatalogPage/>:<RegistrationPage/>}
            </Route>
        </Switch>

    )
 }
 export default RouterComponent