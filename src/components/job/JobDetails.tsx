import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "2rem 0",
        },
    })
);

interface Props {
    description: string;
}

const JobDetails = (props: Props) => {
    const classes = useStyles();

    return <div className={classes.root} dangerouslySetInnerHTML={{ __html: props.description }}></div>;
};

export default JobDetails;
