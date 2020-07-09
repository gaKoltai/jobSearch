import React from "react";
import { render, cleanup } from "@testing-library/react";

import JobPage from "../components/job/JobPage";

const jobs = require("./MockJobFile.json");

const MockPage = () => {
    return <JobPage job={jobs[0]} />;
};

afterEach(cleanup);

describe("JobDetails page", () => {
    test("should render without crashing", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("jobDetailsPage")).toBeInTheDocument();
    });

    test("should display the company logo", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("companyLogo")).toBeInTheDocument();
    });

    test("should display the job details", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("jobDetails")).toBeInTheDocument();
    });

    test("should display the job title", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("jobTitle")).toBeInTheDocument();
    });

    test("should display the company name", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("companyName")).toBeInTheDocument();
    });

    test("should display the job location", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("location")).toBeInTheDocument();
    });

    test("should display the job type", () => {
        const { queryByTestId } = render(<MockPage />);

        expect(queryByTestId("jobType")).toBeInTheDocument();
    });
});
