import React from "react";
import JobsContainer from "./JobsContainer";
import MainSearchTile from "./MainSearchTile";

const LandingPage = () => {
    return (
        <div data-testid="landingpage">
            <MainSearchTile />
            <JobsContainer />
        </div>
    );
};

export default LandingPage;
