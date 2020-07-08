import React, { useContext } from "react";
import { MenuItem, makeStyles, Theme, createStyles } from "@material-ui/core";
import { JobContext } from "../context/JobContextProvider";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            "& li": {
                margin: theme.spacing(3),
                letterSpacing: "0.125rem",
                fontWeight: "500",

                "&:hover": {
                    background: "#fff",
                    color: "#d53252",
                },

                "&:active": {
                    backgroundColor: "#fff",
                },
            },
        },
    })
);

interface Props {}

const NavLinks = (props: Props) => {
    const classes = useStyles();
    const { listByJobType } = useContext(JobContext);

    const listJobsBy = (isFullTime: boolean, target: any) => {
        listByJobType(isFullTime);
    };

    return (
        <ul className={classes.root}>
            <MenuItem
                onClick={(event: any) => {
                    listJobsBy(true, event.target);
                }}
                color="inherit"
            >
                Full-time
            </MenuItem>
            <MenuItem
                color="inherit"
                onClick={(event: any) => {
                    listJobsBy(false, event.target);
                }}
            >
                All jobs
            </MenuItem>
        </ul>
    );
};

export default NavLinks;
