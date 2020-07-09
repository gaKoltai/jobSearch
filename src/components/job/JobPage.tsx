import React from "react";
import { JobData } from "../../static/interfaces/jsondatainterfaces";
import { makeStyles, Theme, createStyles, Box } from "@material-ui/core";
import CompanyLogo from "./CompanyLogo";
import JobTitle from "./JobTitle";
import MiscInfo from "./MiscInfo";
import JobDetails from "./JobDetails";
import StandardButton from "../misc/StandardButton";
import { getDirectJobLink } from "../../static/util/util";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            padding: "2rem",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

interface Props {
    job: JobData;
}

const JobPage = (props: Props) => {
    const classes = useStyles();

    const redirectToJobPage = (target: any): void => {
        window.open(getDirectJobLink(props.job.how_to_apply), "_blank");
    };

    return (
        <Box className={classes.root} data-testid="jobDetailsPage">
            <CompanyLogo logo={props.job.company_logo} />
            <JobTitle title={props.job.title} />
            <MiscInfo location={props.job.location} company={props.job.company} type={props.job.type} />
            <JobDetails description={props.job.description} />
            <StandardButton onClick={redirectToJobPage} />
        </Box>
    );
};

export default JobPage;
