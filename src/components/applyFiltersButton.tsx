import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { applyVoteFilter, applyKeywordFilter, applyOrderFilter } from "../store/actions/filters";

interface Props {
  keyword: string,
  voteRange: [number, number],
  order: string
  applyVoteFilter: any,
  applyKeywordFilter: any,
  applyOrderFilter: any,
  onClick: any
}

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
      padding: "0 30px",
      "&:hover": {
        background: "#1FBBF8 0% 0% no-repeat padding-box",
        boxShadow: "0px 6px 12px #1FBBF88F",
      },
    },
    container: {
      flex: 1,
      justifyContent: "space-around",
      margin: "0 auto",
      marginBottom: 15
    }
  })
);

const mapStateToProps = (state) => {
  return {
    keyword: state.filters.keyword,
    voteRange: state.filters.voteRange,
    order: state.filters.order
  };
};

function ApplyFilters(props: Props): ReactElement {
  const classes = useStyles();

  const applyFilters = () => {
    props.applyKeywordFilter(props.keyword);
    props.applyVoteFilter(props.voteRange);
    props.applyOrderFilter(props.order)
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        onClick={() => {
          applyFilters();
          props.onClick();
        }}
      >
        Apply Filters
      </Button>
    </div>
  );
}

export default connect(mapStateToProps, {
  applyVoteFilter,
  applyKeywordFilter,
  applyOrderFilter
})(ApplyFilters);
