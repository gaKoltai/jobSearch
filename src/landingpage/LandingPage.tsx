import React, { Fragment } from "react";
import JobsContainer from "./JobsContainer";
import MainSearchTile from "./MainSearchTile";

interface Props {}

const LandingPage = (props: Props) => {
    return (
        <Fragment>
            <MainSearchTile />
            <JobsContainer />
        </Fragment>
    );
};

export default LandingPage;
