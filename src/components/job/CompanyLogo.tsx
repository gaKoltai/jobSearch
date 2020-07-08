import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },

        image: {
            width: "30%",
            maxHeight: "30rem",
        },
    })
);

interface Props {
    logo: string;
}

const CompanyLogo = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={props.logo} alt="company logo"></img>
        </div>
    );
};

export default CompanyLogo;
