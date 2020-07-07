import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { JobData } from "../static/interfaces/jsondatainterfaces";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            minWidth: 400,
            minHeight: 200,
            "&hover": {
                cursor: "pointer",
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
    })
);

interface Props {
    job: JobData;
}

const JobCard = (props: Props) => {
    const classes = useStyles();

    const getDirectJobLink = (linkWithNoise: string): string => {
        return linkWithNoise.substring(linkWithNoise.indexOf('"') + 1, linkWithNoise.lastIndexOf('"'));
    };

    const redirectToApply = () => {
        window.open(getDirectJobLink(props.job.how_to_apply), "_blank");
    };

    return (
        <Card className={classes.root}>
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
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                        redirectToApply();
                    }}
                >
                    Apply now
                </Button>
            </CardActions>
        </Card>
    );
};

export default JobCard;
