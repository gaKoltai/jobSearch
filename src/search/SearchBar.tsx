import React, { useState, useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { JobContext } from "../context/JobContextProvider";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface Props {}

const SearchBar = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { searchJobs } = useContext(JobContext);
    const history = useHistory();

    const addSearchQueryToUrl = () => {
        if (searchTerm === "") {
            window.history.pushState("object or string", "Title", ``);
        }

        window.history.pushState("object or string", "Title", `?search=${searchTerm}`);
    };

    const search = () => {
        addSearchQueryToUrl();
        searchJobs(searchTerm);
    };

    return (
        <TextField
            label="Search jobs"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={() => search()}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
        />
    );
};

export default SearchBar;
