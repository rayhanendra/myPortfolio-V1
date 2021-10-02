import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
  Container,
  CardHeader,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DialogProject from "components/Dialog/DialogProject";
import theme from "containers/styles/theme";
import { ProjectWrapper } from "context/wrapper";
import React, { useState } from "react";
import { data } from "./data";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: theme.spacing(12),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 460,
  },
}));

function Project() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);

  const useSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const tabData = [
    {
      name: "ALL",
    },
    {
      name: "WEB",
    },
    {
      name: "UI/UX",
    },
    {
      name: "DESIGN",
    },
    {
      name: "GAME",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDialog = (event, data) => {
    setProjectData(data);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <section id="project-section">
      <Container className={classes.root}>
        <Box mb={8} textAlign="center">
          <Typography
            color="primary"
            variant="h3"
            style={{ padding: theme.spacing(1) }}
          >
            MY PROJECTS
          </Typography>
          <Typography color="primary" variant="body1">
            Here are some projects that i had worked on
          </Typography>
        </Box>
        <Box>
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              flexGrow: 1,
              marginBottom: theme.spacing(6),
              backgroundColor: theme.palette.background.default,
              borderColor: theme.palette.secondary.main,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor=""
              indicatorColor="secondary"
              centered
              variant={useSmall ? "scrollable" : "centered"}
            >
              {tabData.map((data) => (
                <Tab
                  label={
                    <Typography variant={useSmall ? "body2" : "h3"}>
                      {data.name}
                    </Typography>
                  }
                />
              ))}
            </Tabs>
          </Paper>

          <Grid container spacing={3} align="center">
            {value !== 0
              ? data
                  .filter((data) => data.type === value)
                  .map((data, index) => (
                    <Grid item key={index} xs={12} md={4}>
                      <Card
                        className={classes.card}
                        elevation={0}
                        style={{ borderRadius: theme.spacing(2) }}
                        onClick={(event) => handleDialog(event, data)}
                      >
                        <CardActionArea>
                          <CardHeader
                            align="left"
                            title={
                              <Typography variant="h3">{data.title}</Typography>
                            }
                          />
                          <CardMedia
                            className={classes.media}
                            image={data.image}
                            title={data.title}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
              : data.map((data, index) => (
                  <Grid item key={index} xs={12} md={4}>
                    <Card
                      className={classes.card}
                      elevation={0}
                      style={{ borderRadius: theme.spacing(2) }}
                      onClick={(event) => handleDialog(event, data)}
                    >
                      <CardActionArea>
                        <CardHeader
                          align="left"
                          title={
                            <Typography variant="h3">{data.title}</Typography>
                          }
                        />
                        <CardMedia
                          className={classes.media}
                          image={data.image}
                          title={data.title}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
          </Grid>

          <ProjectWrapper dataProject={projectData}>
            {openDialog && (
              <DialogProject
                open={openDialog}
                onClose={handleClose}
                setIsShowDialog={setOpenDialog}
              />
            )}
          </ProjectWrapper>
        </Box>
      </Container>
    </section>
  );
}

export default Project;
