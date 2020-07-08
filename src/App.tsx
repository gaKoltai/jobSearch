import React from "react";
import Container from "@material-ui/core/Container";
import LandingPage from "./components/landingpage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobContextProvider from "./components/context/JobContextProvider";
import NavBar from "./components/navigation/NavBar";
import { CssBaseline, makeStyles, Theme, createStyles, MuiThemeProvider } from "@material-ui/core";
import JobPageContainer from "./components/job/JobPageContainer";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(15),
        },
    })
);

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <JobContextProvider>
                    <NavBar />
                    <Container maxWidth="lg" className={classes.root}>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage />
                            </Route>
                            <Route exact path="/job/:id">
                                <JobPageContainer />
                            </Route>
                        </Switch>
                    </Container>
                </JobContextProvider>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
