import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import Profile from "../views/web/Profile";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Register from "./SignUp";
import ForgotPw from "./ForgotPw";
import HomePage from "../views/web/HomePage";
import ChangePw from "./ChangePw";
import PostOrder from "../views/web/PostOrder";
import MapMain from "../views/web/MapGG";

function Application() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/home" component={HomePage} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="change" component={ChangePw} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgotpw" component={ForgotPw} />
                    <Route exact path="/post-order" component={PostOrder} />
                </Switch>
            </AuthProvider>
            <Switch>
                <Route path="/map" component={MapMain} />
                <Redirect from="/" to="login" exact />
            </Switch>
        </Router>
    );
}
export default Application;
