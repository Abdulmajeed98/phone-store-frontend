import { Route, Switch } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/singup/Signup"
import Navbar from "../components/navbar/Navbar"
import routes from "./routeDefinitions"

const Routes = () => {
    return (
        <Switch>
            <Route exact path={routes.home.path}>
                <Navbar />
                <Home />
            </Route>
            <Route exact path={routes.login.path}>
                <Login />
            </Route>
            <Route exact path={routes.signup.path}>
                <Signup />
            </Route>
        </Switch>
    )
}

export default Routes
