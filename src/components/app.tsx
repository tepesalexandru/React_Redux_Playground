import React from "react";
import SessionCard from "./session-card";
import "./app.css";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { resetVote, mostVoted } from "../store/actions/sessions";
import MainFilter from "./mainFilter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      background: "#1FBBF8 0% 0% no-repeat padding-box",
      border: 0,
      borderRadius: 10,
      color: "white",
      width: 170,
      height: 48,
      margin: "0 10px",
      padding: "0 30px",
      "&:hover": {
        background: "#1FBBF8 0% 0% no-repeat padding-box",
        boxShadow: "0px 6px 12px #1FBBF88F",
      },
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
    buttonContainer: {
      display: "flex",
    }
  })
);


const mapStateToProps = (state) => {
  return {
    sessions: state.sessions.filteredSessions,
    totalVotes: state.sessions.totalVotes,
    mostVotedSession: state.sessions.mostVotedSession,
  };
};

const App = (props) => {

  const classes = useStyles();

  const sessionsList = props.sessions.map((session, i) => {
    return (
      <SessionCard key={`session-${i}`} session={Object.assign({}, session)}></SessionCard>
    );
  });

  return (
    <div>
      <div className={`header`}>
        <Typography className={classes.container}>
          Number of votes: {props.totalVotes}
          <div style={{display: "inline-block"}} className={classes.buttonContainer}>
          <Button
          id="reset"
            className={classes.button}
            size="small"
            onClick={() => props.resetVote()}
          >
            RESET VOTES
          </Button>
          <Button
          id="most"
            className={classes.button}
            size="small"
            onClick={() => props.mostVoted()}
          >
            SHOW MOST VOTED SESSION
          </Button>
          <MainFilter />
          </div>
        </Typography>
        
      </div>
      <div>
        {sessionsList}
      </div>
      {/* {props.mostVotedSession && <div>Most voted session<SessionCard session={props.mostVotedSession}></SessionCard></div>} */}
    </div>
  );
};

export default connect(mapStateToProps, { resetVote, mostVoted })(App);
