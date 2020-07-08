import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { JobData } from "../../static/interfaces/jsondatainterfaces";
import { JobContext } from "../context/JobContextProvider";
import JobPage from "./JobPage";

const JobPageContainer = () => {
    const { id } = useParams();
    const [job, setJob] = useState<undefined | JobData>();
    const { getJobById } = useContext(JobContext);

    useEffect(() => {
        (async function getJob() {
            const jobById = await getJobById(id);
            setJob(jobById);
        })();
    }, [getJobById, id]);

    return <Fragment>{job && <JobPage job={job} />}</Fragment>;
};

export default JobPageContainer;
