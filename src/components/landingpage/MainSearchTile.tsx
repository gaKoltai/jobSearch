import React from "react";
import { Box, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import SearchBar from "../search/SearchBar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            padding: theme.spacing(2),
            fontSize: 20,
        },

        title: {
            padding: theme.spacing(2),
            fontSize: 40,
            fontWeight: "bold",
            color: "#DC3545",
        },
    })
);

interface Props {}

const MainSearchTile = (props: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>When was the last time you were proud of your job?</Typography>
            <Typography className={classes.text}>
                You are just a simple search away from finding your dream job, why hesitate?
            </Typography>
            <SearchBar />
        </Box>
    );
};

export default MainSearchTile;
