import * as React from 'react';
import { Session } from '../models/session.model';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './session-card.css';
import { connect } from "react-redux";
import { incrementVote, decrementVote } from "../store/actions/sessions";

type Props = {
    session: Session,
    incrementVote: (id: number) => void,
    decrementVote: (id: number) => void
}

const SessionCard = (props: Props) => {

    return (
        <Card className="card">
            <CardContent className={`${props.session.isMostVoted ? "session-card" : ""  }`}>
                <Typography variant="h5" component="h2">
                    {props.session.title} <small className="speaker">{" by " + props.session.speaker}</small>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {props.session.room + " - " + props.session.time}
                </Typography>
                <Typography color="textSecondary">

                </Typography>
                <Typography variant="body2" component="p">
                    {props.session.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => props.incrementVote(props.session.id)}>Vote👆 ({props.session.vote})</Button>
                <Button size="small" onClick={() => props.decrementVote(props.session.id)}>Unvote👎</Button>
            </CardActions>
        </Card>)
}

export default connect(null, { incrementVote, decrementVote })(SessionCard)