import React from "react";
import { render, cleanup } from "@testing-library/react";
import { JobContext } from "../components/context/JobContextProvider";
import LandingPage from "../components/landingpage/LandingPage";

const jobs = require("./MockJobFile.json");

const MockFrontPage = () => {
    const mockFunction = () => {
        return;
    };
    return (
        <JobContext.Provider
            value={{
                jobList: jobs,
                searchJobs: mockFunction,
                setJobList: mockFunction,
                listByJobType: mockFunction,
                getJobById: mockFunction,
            }}
        >
            <LandingPage />
        </JobContext.Provider>
    );
};

afterEach(cleanup);

describe("The frontpage", () => {
    test("should render without crashing", () => {
        const { queryByTestId } = render(<MockFrontPage />);

        expect(queryByTestId("landingpage")).toBeInTheDocument();
    });

    test("should render all jobs in context", () => {
        const { queryAllByTestId } = render(<MockFrontPage />);

        expect(queryAllByTestId("jobCard")).toHaveLength(jobs.length);
    });
});

describe("Each jobcard", () => {
    test("should have a title", () => {
        const { queryAllByTestId } = render(<MockFrontPage />);

        expect(queryAllByTestId("jobcardHeader")).toHaveLength(jobs.length);
    });

    test("should have its content rendered", () => {
        const { queryAllByTestId } = render(<MockFrontPage />);

        expect(queryAllByTestId("jobCardContent")).toHaveLength(jobs.length);
    });

    test("should have an apply button", () => {
        const { queryAllByTestId } = render(<MockFrontPage />);

        expect(queryAllByTestId("jobcardBtn")).toHaveLength(jobs.length);
    });
});
