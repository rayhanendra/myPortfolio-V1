import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import theme from "containers/styles/theme";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {},
  title: {
    color: "",
  },
  titleClose: {
    color: palette.primary.main,
  },
}));

const DialogBase = (props) => {
  const classes = useStyles();
  const { children, title, setIsShowDialog, isShowDialog } = props;

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Dialog
        open={isShowDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
        fullScreen={fullScreen}
      >
        {/* Dialog Title */}
        <Box
          color="#FFFFFF"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <IconButton onClick={() => setIsShowDialog(!isShowDialog)}>
            <Close className={classes.titleClose} style={{ color: "white" }} />
          </IconButton>
        </Box>
        {/* Dialog Content */}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Box>
  );
};

export default DialogBase;
