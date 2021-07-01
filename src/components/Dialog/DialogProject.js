import { Box, Grid, Typography } from "@material-ui/core";
import DialogBase from "components/Dialog/DialogBase";
import { useDataProject } from "hooks/useProjectHooks";
import React from "react";

function DialogProject(props) {
  const { style, className, ...rest } = props;

  const { dataProject } = useDataProject();
  console.log("ini data ddialog", dataProject);

  return (
    <DialogBase title={dataProject.title} {...rest}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Box mb={2}>
            <Typography variant="h3">{dataProject.subtitle}</Typography>
          </Box>
          {dataProject.paragraph.map((text) => (
            <Box mb={2}>
              <Typography variant="h4" align="justify">
                {text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </DialogBase>
  );
}

export default DialogProject;
