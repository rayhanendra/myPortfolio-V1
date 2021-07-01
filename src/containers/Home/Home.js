import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "../../Button";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import theme from "containers/styles/theme";
import main1 from "assets/images/main1.svg";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: theme.spacing(12),
  },
  icons: {
    padding: theme.spacing(6),
    float: "right",
    display: "flex",
    width: "205px",
    justifyContent: "space-between",
  },
  text: {
    marginBottom: theme.spacing(6),
  },
  img: {
    height: "353px",
    float: "right",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "stretch",
    backgroundColor: "transparent",
  },
  titles: {
    marginTop: "60px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrowContainer: {
    marginTop: "43px",
    width: "100%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "170px",
    position: "relative",
    left: 0,
    top: 0,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  // arrow: {
  //   position: "absolute",
  //   top: "60px",
  //   left: "518px",
  //   textAlign: "center",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   backgroundColor: "#00c49a",
  //   textDecoration: "none",
  //   color: "white",
  // },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.icons}>
        <img src="img/icons/tw.svg" alt="instagram" />
        <img src="img/icons/ig.svg" alt="instagram" />
        <img src="img/icons/in.svg" alt="instagram" />
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={classes.text}>
            Hello, I'm <b>Rayhan</b>
            <br />
            Welcome to my portfolio
          </Typography>
          <Typography variant="h1" className={classes.text}>
            Do something impactful, whether it’s good or better
          </Typography>
          <Button>download cv</Button>
        </Grid>

        <Grid item xs={12} md={6} style={{ alignItems: "end" }}>
          <img className={classes.img} src={main1} alt="main" />
        </Grid>
      </Grid>

      <Box>
        <Box className={classes.titles}>
          <Typography variant="h3">Front-End Developer</Typography>
          <Typography variant="h3">UI/UX Designer</Typography>
          <Typography variant="h3">Graphic Designer</Typography>
        </Box>
        {/* <Box className={classes.arrowContainer}>
          <img className="polygon" src="img/icons/polygon.svg" alt="polygon" />
          <Link to="about-section" className={classes.arrow}>
            See More
          </Link>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Home;
