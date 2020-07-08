import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { JobData } from "../../static/interfaces/jsondatainterfaces";
import { useHistory } from "react-router-dom";
import StandardButton from "../misc/StandardButton";
import { getDirectJobLink } from "../../static/util/util";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            minWidth: 400,
            minHeight: 200,
            "&:hover": {
                cursor: "pointer",
                boxShadow: ".125rem .125rem .25rem 0 rgba(0,0,0,.5)",
            },
        },
        media: {
            height: "100%",
        },

        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },

        actionMenu: {
            justifyContent: "center",
            alignItems: "center",
        },

        content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            fontSize: "0.8rem",
        },

        title: {
            color: "linear-gradient(90deg,#bc2560 0,transparent 70%)",
        },
    })
);

interface Props {
    job: JobData;
}

const JobCard = (props: Props) => {
    const classes = useStyles();
    const history = useHistory();

    const redirect = (target: any) => {
        target.classList.contains("redirect-btn") || target.parentElement.classList.contains("redirect-btn")
            ? window.open(getDirectJobLink(props.job.how_to_apply), "_blank")
            : history.push(`/job/${props.job.id}`);
    };

    return (
        <Card
            className={classes.root}
            onClick={(event: any) => {
                redirect(event.target);
            }}
        >
            <CardHeader
                avatar={<Avatar aria-label="recipe" src={props.job.company_logo} className={classes.large}></Avatar>}
                title={props.job.title}
                subheader={props.job.company}
            />
            <CardContent className={classes.content}>
                <Typography className={classes.text}>
                    {props.job.location} | {props.job.type}
                </Typography>
            </CardContent>
            <CardActions className={classes.actionMenu}>
                <StandardButton onClick={redirect} helperClass={"redirect-btn"} />
            </CardActions>
        </Card>
    );
};

export default JobCard;
