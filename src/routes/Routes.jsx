import { Route, Switch } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/singup/Signup"
import Navbar from "../components/navbar/Navbar"
import routes from "./routeDefinitions"
import Products from "../pages/products/Products"
import AboutUs from "../pages/aboutUs/AboutUs"
import ContactUs from "../pages/contactUs/ContactUs"
import Cart from "../pages/cart/Cart"

// TODO: use {Suspense} for the routes
const Routes = () => {
    return (
        <Switch>
            <Route exact path={routes.home.path}>
                <Navbar />
                <Home />
            </Route>

            <Route exact path={routes.products.path}>
                <Navbar />
                <Products />
            </Route>

            <Route exact path={routes.aboutUs.path}>
                <Navbar />
                <AboutUs />
            </Route>

            <Route exact path={routes.contactUs.path}>
                <Navbar />
                <ContactUs />
            </Route>
            <Route exact path={routes.cart.path}>
                <Navbar />
                <Cart />
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
