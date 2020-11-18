import React, { ReactElement } from "react";
import CardFilter from "./card-word-filter";
import VoteFilter from "./card-vote-filter";
import ApplyFilters from "./applyFiltersButton";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import OrderFilter from "./card-order-filter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //borderRadius: "20px",
      //boxShadow: theme.shadows[5],
      padding: "20px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      '& .title' : {
        textTransform: "uppercase",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "25px"
      }
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
  })
);

interface Props {}

export default function MainFilter({}: Props): ReactElement {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{display: "inline-block"}}>
      <Button className={classes.button} onClick={handleOpen}>
        Filters 🤯
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p className="title">Your Filters</p>
            <CardFilter />
            <VoteFilter />
            <OrderFilter />
            <ApplyFilters onClick={handleClose}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
