import React, { ReactNode, createContext, useState, useEffect } from "react";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { JobData } from "../../static/interfaces/jsondatainterfaces";

interface ContextStateProp {
    jobList: JobData[];
    setJobList: Function;
    searchJobs: Function;
    listByJobType: Function;
    getJobById: Function;
}

export const JobContext = createContext<ContextStateProp>({} as ContextStateProp);

const JobContextProvider = ({ children }: { children: ReactNode }) => {
    const [jobList, setJobList] = useState<any | JobData[]>();

    useEffect(() => {
        listAllAvailableJobs();
    }, []);

    const listAllAvailableJobs = (): void => {
        axios.get("/positions.json").then((response: AxiosResponse<JobData[]>) => {
            setJobList(response.data);
        });
    };

    const listByJobType = (isFullTime: boolean): void => {
        axios.get(`/positions.json?full_time=${isFullTime}`).then((response: AxiosResponse<JobData[]>) => {
            setJobList(response.data);
        });
    };

    const searchJobs = (searchTerm: string): void => {
        if (searchTerm === "") {
            listAllAvailableJobs();
        }
        axios.get(`/positions.json?description=${searchTerm}`).then((response: AxiosResponse<JobData[]>) => {
            setJobList(response.data);
        });
    };

    const getJobById = async (id: string): Promise<JobData> => {
        return jobList === undefined
            ? (await axios.get(`positions/${id}.json`)).data
            : jobList.find((job: JobData) => job.id === id);
    };

    return (
        <JobContext.Provider value={{ jobList, setJobList, searchJobs, listByJobType, getJobById }}>
            {children}
        </JobContext.Provider>
    );
};

export default JobContextProvider;
