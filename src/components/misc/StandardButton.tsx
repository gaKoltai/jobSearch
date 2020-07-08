import React from "react";
import { Button, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            background: "linear-gradient(90deg,#bc2560 0,transparent 70%)",
            backgroundColor: " #d53252",
            borderRadius: 10,
            color: "white",
            textTransform: "none",
            boxShadow: ".125rem .125rem .25rem 0 rgba(0,0,0,.1)",
            fontSize: "0.8rem",
            padding: " 0.2rem 2rem",
            transition: "all .15s ease",

            "&:hover": {
                backgroundColor: " #d53252",
                boxShadow: ".125rem .125rem .25rem 0 rgba(0,0,0,.5)",
            },
        },
    })
);

interface Props {
    onClick: Function;
    helperClass?: string;
}

const StandardButton = (props: Props) => {
    const classes = useStyles();

    return (
        <Button
            className={`${classes.button} ${props.helperClass}`}
            onClick={(event: any) => {
                props.onClick(event.target);
            }}
        >
            Apply now
        </Button>
    );
};

export default StandardButton;
