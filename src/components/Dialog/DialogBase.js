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
} from "@material-ui/core";
import { Close, GitHub } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
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
  const { children, title, type, year, github, setIsShowDialog, isShowDialog } =
    props;

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Box>
      <Dialog
        open={isShowDialog}
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
          <IconButton onClick={() => setIsShowDialog(!isShowDialog)}>
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
