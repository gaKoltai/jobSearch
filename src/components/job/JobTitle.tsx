import React from "react";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#d53252",
            margin: "2rem 0",
        },
    })
);

interface Props {
    title: string;
}

const JobTitle = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">{props.title}</Typography>
        </div>
    );
};

export default JobTitle;
