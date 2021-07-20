import { Box, Grid, Typography } from "@material-ui/core";
import DialogBase from "components/Dialog/DialogBase";
import theme from "containers/styles/theme";
import { useDataProject } from "hooks/useProjectHooks";
import React from "react";

function DialogProject(props) {
  const { style, className, ...rest } = props;

  const { dataProject } = useDataProject();

  return (
    <DialogBase
      title={dataProject.title}
      type={dataProject.type}
      year={dataProject.year}
      github={dataProject.github}
      {...rest}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <Box mb={2}>
            <Typography variant="h3">{dataProject.subtitle}</Typography>
          </Box>
          {dataProject.paragraph.map((text, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h4" align="justify">
                {text}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid container item xs={12} md={12} lg={6}>
          {dataProject.process?.map((data, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Box align="center" marginBottom={theme.spacing(0.5)}>
                <img
                  alt={data.desc}
                  src={data.image}
                  width="250"
                  style={{
                    marginBottom: theme.spacing(0.5),
                    borderRadius: theme.spacing(2),
                  }}
                />
                <Typography variant="h4">{data.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </DialogBase>
  );
}

export default DialogProject;
