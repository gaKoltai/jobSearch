import React, { useContext } from "react";
import { makeStyles, Theme, createStyles, Grid, Box } from "@material-ui/core";
import { JobContext } from "../context/JobContextProvider";
import { JobData } from "../../static/interfaces/jsondatainterfaces";
import JobCard from "./JobCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 340,
            width: 300,
        },
        control: {
            padding: theme.spacing(2),
        },
    })
);

interface Props {}

const JobsContainer = (props: Props) => {
    const classes = useStyles();
    const { jobList } = useContext(JobContext);

    return (
        <Box component="div" my={4}>
            <Grid container className={classes.root} spacing={2}>
                <Grid container justify="center" spacing={2}>
                    {jobList &&
                        jobList.map((job: JobData) => (
                            <Grid key={job.id} item>
                                <JobCard job={job} />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default JobsContainer;
