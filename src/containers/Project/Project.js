import {
  Box,
  Typography,
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
  Container,
  CardHeader,
} from "@material-ui/core";
import DialogProject from "components/Dialog/DialogProject";
import DialogBase from "components/Dialog/DialogBase";
import theme from "containers/styles/theme";
import { ProjectWrapper } from "context/wrapper";
import React from "react";
import { data } from "./data";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: theme.spacing(12),
  },
  paper: {
    flexGrow: 1,
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.secondary.main,
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
  console.log("ini projectdata", projectData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDialog = (event, data) => {
    setProjectData(data);
    console.log(data);
    setOpenDialog(true);
  };

  return (
    <Container className={classes.root}>
      <Box mb={8} textAlign="center">
        <Typography variant="h3" style={{ padding: theme.spacing(1) }}>
          MY PROJECTS
        </Typography>
        <Typography variant="body1">
          Here are some projects that i had worked on
        </Typography>
      </Box>
      <Box>
        <Paper variant="outlined" elevation={0} className={classes.paper}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            centered
          >
            <Tab label={<Typography variant="h3">ALL</Typography>} />
            <Tab label={<Typography variant="h3">WEB</Typography>} />
            <Tab label={<Typography variant="h3">UI/UX</Typography>} />
            <Tab label={<Typography variant="h3">DESIGN</Typography>} />
          </Tabs>
        </Paper>

        <Grid container spacing={3} align="center">
          {data.map((data, index) => (
            <Grid item key={index} md={4}>
              <Card
                className={classes.card}
                elevation={0}
                style={{ borderRadius: theme.spacing(2) }}
                onClick={(event) => handleDialog(event, data)}
              >
                <CardActionArea>
                  <CardHeader
                    align="left"
                    title={<Typography variant="h3">{data.title}</Typography>}
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
              isShowDialog={openDialog}
              setIsShowDialog={setOpenDialog}
            />
          )}
        </ProjectWrapper>
      </Box>
    </Container>
  );
}

export default Project;
