import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import theme from "containers/styles/theme";
import about from "assets/images/about.svg";
import LinearProgress from "@mui/material/LinearProgress";
import { skills } from "./data";
import { makeStyles, withStyles } from "@mui/styles";
// import poly2 from "assets/images/poly2.png";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginTop: theme.spacing(2),
  },
  colorPrimary: {
    backgroundColor: theme.palette.secondary.accent,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}))(LinearProgress);

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: theme.spacing(12),
  },
  poly: {
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <section id="about-section">
      <Container className={classes.root}>
        <Box>
          {/* <Box className={classes.poly}>
          <img src={poly2} alt="polygon" />
        </Box> */}
          <Grid container style={{ marginBottom: theme.spacing(10) }}>
            <Grid item xs={12} md={6}>
              <img src={about} alt="" />
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: "auto", width: "50%" }}>
              <Typography variant="body1" align="justify">
                I’m <b>M.Rayhanendra Adikoesoemo</b>
                <br />
                <br />
                Life is too short for being mediocre. The reason why I challenge
                myself to become a uniquely creative {""}
                <b>Web Developer</b> and <b>UI/UX Designer</b>. Work in a group
                with a friendly atmosphere is the best way to increase my
                productivity. Professionality and humanity will be on top of my
                priorities.
                <br />
                <br />
                It’s not just about implementing the idea, but generating it!
              </Typography>
            </Grid>
          </Grid>
          <Box style={{ marginBottom: theme.spacing(10) }}>
            <Typography variant="h3" style={{ padding: theme.spacing(1) }}>
              My Skills
            </Typography>
            <Grid container spacing={2}>
              {skills.map((data, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  style={{ padding: theme.spacing(2) }}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">{data.title}</Typography>
                    <Typography variant="h3">{data.value}%</Typography>
                  </Box>
                  <BorderLinearProgress
                    variant="determinate"
                    value={data.value}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={2}>
            {skills.map((data, index) => (
              <Grid
                key={index}
                item
                md={6}
                style={{ padding: theme.spacing(2) }}
              >
                <Typography
                  variant="h3"
                  style={{ marginBottom: theme.spacing(2) }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body1" align="justify">
                  {data.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default About;
