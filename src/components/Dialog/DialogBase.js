import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Close, GitHub } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import theme from "containers/styles/theme";
import { useTypeFilter } from "hooks/useProjectHooks";

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
  const { children, title, type, year, github, onClose, open } = props;

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Box>
      <Dialog
        onClose={onClose}
        open={open}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
        fullScreen={fullScreen}
      >
        {/* Dialog Title */}
        <Box color="#FFFFFF" display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <DialogTitle
              id="alert-dialog-title"
              style={{
                textAlign: "center",
                paddingRight: theme.spacing(1),
              }}
            >
              {title}
            </DialogTitle>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <IconButton
                  color="primary"
                  // style={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <GitHub style={{ color: "white" }} />
                </IconButton>
              </a>
            )}
          </Box>
          <IconButton onClick={() => onClose(false)}>
            <Close className={classes.titleClose} style={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box
          style={{
            paddingTop: 0,
            paddingBottom: fullScreen ? theme.spacing(1) : theme.spacing(1),
            paddingLeft: theme.spacing(3),
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            style={{
              paddingTop: 0,
            }}
          >
            <Typography
              variant="h5"
              style={{
                marginRight: theme.spacing(2),
              }}
            >
              {useTypeFilter(type)}
            </Typography>
            <Typography variant="h5">{year}</Typography>
          </Box>
        </Box>

        {/* Dialog Content */}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Box>
  );
};

export default DialogBase;
