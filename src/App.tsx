import React from "react";
import Container from "@material-ui/core/Container";
import LandingPage from "./landingpage/LandingPage";
import { setup } from "./static/util/axiosConfig";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import JobContextProvider from "./context/JobContextProvider";
import NavBar from "./navigation/NavBar";
import { CssBaseline } from "@material-ui/core";

export const history = createBrowserHistory();

function App() {
    setup.setupInterceptors();

    return (
        <Router history={history}>
            <CssBaseline />
            <JobContextProvider>
                <NavBar />
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact component={LandingPage} path="/" />
                    </Switch>
                </Container>
            </JobContextProvider>
        </Router>
    );
}

export default App;
