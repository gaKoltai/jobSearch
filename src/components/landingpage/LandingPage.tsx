import React, { Fragment } from "react";
import JobsContainer from "./JobsContainer";
import MainSearchTile from "./MainSearchTile";

const LandingPage = () => {
    return (
        <Fragment>
            <MainSearchTile />
            <JobsContainer />
        </Fragment>
    );
};

export default LandingPage;
