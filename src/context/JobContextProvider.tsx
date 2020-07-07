import React, { ReactNode, createContext, useState, useEffect } from "react";
import axios from "../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { JobData } from "../static/interfaces/jsondatainterfaces";

interface ContextStateProp {
    jobList: JobData[];
    setJobList: Function;
    searchJobs: Function;
}

export const JobContext = createContext<ContextStateProp>({} as ContextStateProp);

const JobContextProvider = ({ children }: { children: ReactNode }) => {
    const [jobList, setJobList] = useState<any | JobData[]>();

    useEffect(() => {
        listAllAvailableJobs();
    }, []);

    const listAllAvailableJobs = () => {
        axios.get("/positions.json").then((response: AxiosResponse<JobData[]>) => {
            setJobList(response.data);
        });
    };

    const searchJobs = (searchTerm: string) => {
        if (searchTerm === "") {
            listAllAvailableJobs();
        }
        axios.get(`/positions.json?description=${searchTerm}`).then((response: AxiosResponse<JobData[]>) => {
            setJobList(response.data);
            console.log(response.data);
        });
    };

    return <JobContext.Provider value={{ jobList, setJobList, searchJobs }}>{children}</JobContext.Provider>;
};

export default JobContextProvider;
