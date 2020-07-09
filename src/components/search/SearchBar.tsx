import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { JobContext } from "../context/JobContextProvider";
import { TextField, InputAdornment, IconButton, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "50%",
            margin: "3rem 0",
        },

        button: {
            color: "#d53252",
        },

        inputField: {
            color: "#d53252",
        },

        floatingLabelFocusStyle: {
            "&.focused": {
                color: "#d53252",
            },
        },

        underline: {
            "&::after": {
                borderBottom: "2px solid #d53252;",
            },
        },
    })
);

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { searchJobs } = useContext(JobContext);
    const classes = useStyles();

    const search = (): void => {
        searchJobs(searchTerm);
        setSearchTerm("");
    };

    const searchOnKeyDown = (event: any): void => {
        if (event.keyCode === 13) {
            searchJobs(searchTerm);
            setSearchTerm("");
        }
    };

    return (
        <TextField
            label="Search jobs"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start" color="inherit">
                        <IconButton onClick={() => search()}>
                            <SearchIcon className={classes.button} />
                        </IconButton>
                    </InputAdornment>
                ),
                classes: {
                    underline: classes.underline,
                },
            }}
            InputLabelProps={{
                classes: {
                    root: classes.floatingLabelFocusStyle,
                    focused: "focused",
                },
            }}
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
            className={classes.root}
            onKeyDown={(event: any) => {
                searchOnKeyDown(event);
            }}
            value={searchTerm}
        />
    );
};

export default SearchBar;
