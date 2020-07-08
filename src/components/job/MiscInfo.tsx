import React from "react";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "60%",
            color: "gray",

            "& p": {
                margin: "1rem",
            },
        },
    })
);

interface Props {
    location: string;
    company: string;
    type: string;
}

const MiscInfo = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="p">{props.company}</Typography>
            <Typography component="p">{props.location}</Typography>
            <Typography component="p">{props.type}</Typography>
        </div>
    );
};

export default MiscInfo;
