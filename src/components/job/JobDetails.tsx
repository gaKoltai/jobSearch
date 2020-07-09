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

    /* Wouldn't normally use set inner html as to avoid running possible malicious scripts from the 3rd party site */

    return (
        <div
            className={classes.root}
            dangerouslySetInnerHTML={{ __html: props.description }}
            data-testid="jobDetails"
        ></div>
    );
};

export default JobDetails;
