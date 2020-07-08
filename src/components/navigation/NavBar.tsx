import React, { Fragment } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavLinks from "./NavLinks";
import { useHistory } from "react-router-dom";
import WorkRounded from "@material-ui/icons/WorkRounded";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            marginRight: theme.spacing(2),

            "&:hover": {
                cursor: "pointer",
            },

            "& *": {
                margin: "0 0.5rem",
                fontWeight: "bold",
            },
        },

        title: {
            position: "relative",
            top: ".125rem",
        },

        icon: {
            color: "#d53252",
        },

        navbar: {
            background: "#fff",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            color: "black",
            width: "100%",
        },

        toolbar: {
            width: "68%",
            display: "flex",
            justifyContent: "space-between",
        },

        offset: theme.mixins.toolbar,
    })
);

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Fragment>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.root}>
                        <WorkRounded fontSize="large" className={classes.icon} />
                        <Typography
                            variant="h5"
                            onClick={() => {
                                history.push("/");
                            }}
                            className={classes.title}
                        >
                            Dr. Eam Jobs
                        </Typography>
                    </div>

                    <NavLinks />
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </Fragment>
    );
};

export default NavBar;
