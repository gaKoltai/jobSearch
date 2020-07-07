import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },

        navbar: {
            background: "#fff",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            color: "#DC3545",
        },

        toolbar: {
            width: "68%",
        },
    })
);

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        onClick={() => {
                            console.log("clicked");
                        }}
                    >
                        Dr. Eam Jobs
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
