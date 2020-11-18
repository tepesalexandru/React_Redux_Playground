import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import React, { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setKeywordFilter } from "../store/actions/filters";

interface Props {
  setKeywordFilter: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        //margin: theme.spacing(1),
        width: 250,
      },
    },
  })
);


function CardFilter(props: Props): ReactElement {
  const classes = useStyles();

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    props.setKeywordFilter(keyword);
  }, [keyword])

  return (
    <div style={{marginBottom: "30px"}}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="keyword-input" label="Keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      </form>
    </div>
  );
}

export default connect(null, { setKeywordFilter })(CardFilter);
