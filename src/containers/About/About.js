import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "containers/styles/theme";
import img2 from "assets/img2.png";
import poly2 from "assets/poly2.png";
const useStyles = makeStyles(() => ({
  poly: {
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Box className={classes.poly}>
          <img src={poly2} alt="polygon" />
        </Box>
        <Grid container style={{ marginBottom: theme.spacing(10) }}>
          <Grid item xs={12} md={6}>
            <img src={img2} alt="" />
          </Grid>
          <Grid item xs={12} md={6} style={{ margin: "auto", width: "50%" }}>
            <Typography variant="body1">
              I’m <b>Muhammad Rayhanendra Adikoesoemo</b>
              <br />
              <br />
              Life is too short for being mediocre. That’s why I became a{" "}
              <b>UI/UX Designer</b> and <b>Web Developer</b>. Being creative and
              unique are some of my treats. Work in a group with a friendly
              atmosphere is the best way to increase my productivity.
              Professionality and humanity will be on top of my priorities.
              <br />
              <br />
              It’s not all about implementing the idea, it’s also about
              generating the idea~
            </Typography>
          </Grid>
        </Grid>
        <Box style={{ marginBottom: theme.spacing(10) }}>
          <Typography variant="h3" style={{ padding: theme.spacing(2) }}>
            My Skills
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6} style={{ padding: theme.spacing(2) }}>
              <Typography variant="body1">UI/UX DESIGN</Typography>
            </Grid>
            <Grid item md={6} style={{ padding: theme.spacing(2) }}>
              <Typography variant="body1">WEB DEVELOPMENT</Typography>
            </Grid>
            <Grid item md={6} style={{ padding: theme.spacing(2) }}>
              <Typography variant="body1">GRAPHIC DESIGN</Typography>
            </Grid>
            <Grid item md={6} style={{ padding: theme.spacing(2) }}>
              <Typography variant="body1">TEAMWORK</Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={4} style={{ padding: theme.spacing(2) }}>
            <Typography variant="h3" style={{ marginBottom: theme.spacing(2) }}>
              UI/UX DESIGN
            </Typography>
            <Typography variant="body1">
              This skill achieved after several attempt of doing projects,
              design jam and courses. I’m currently still learning and going to
              improve even more.
            </Typography>
          </Grid>
          <Grid item md={4} style={{ padding: theme.spacing(2) }}>
            <Typography variant="h3" style={{ marginBottom: theme.spacing(2) }}>
              WEB DEVELOPMENT
            </Typography>
            <Typography variant="body1">
              After doing a project on making a web-based forum. I learned
              skills such as HTML, CSS and Javascript. And now i’m learning the
              React Js.
            </Typography>
          </Grid>
          <Grid item md={4} style={{ padding: theme.spacing(2) }}>
            <Typography variant="h3" style={{ marginBottom: theme.spacing(2) }}>
              GRAPHIC DESIGN
            </Typography>
            <Typography variant="body1">
              Being passionate on the digital art, the younger me learned how to
              use the Photoshop since in the elementary school. And never stop
              learning ever since.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
