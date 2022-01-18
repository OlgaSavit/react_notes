import {
    Switch,
    Route,
} from "react-router-dom";
import {lazy} from "react";
import PageNotFound from "../services/NotFound";
const CatalogPage = lazy(() => import("../pages/catalog"));
const MainPage = lazy(() => import("../pages/layout"));
const TaskPage = lazy(() => import("../pages/taskPage"));

const Authorization=()=>{
    return(
        <Switch>
            <Route path='/' exact>
                <MainPage/>
            </Route>
            <Route path='/catalog'>
                <CatalogPage/>
            </Route>
            <Route path='/my_tasks'>
                <TaskPage/>
            </Route>
            <Route>
                <PageNotFound/>
            </Route>
        </Switch>

    )
}
export default Authorization;