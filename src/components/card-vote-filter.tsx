import React, { ReactElement, useEffect } from "react";
import {connect} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {setVoteFilter} from '../store/actions/filters';

interface Props {
  setVoteFilter: any
}

const useStyles = makeStyles({
  root: {
    width: 250,
    marginBottom: 15
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

function VoteFilter(props: Props): ReactElement {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([0, 50]);

  useEffect(() => {
    props.setVoteFilter(value);

  }, [value])

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Vote range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default connect(null, { setVoteFilter })(VoteFilter);