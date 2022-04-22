import React from "react";
import { projects } from "./database";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const cards = [1, 2, 3, 4, 5];

const theme = createTheme();

function Projects() {
  console.log(projects);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Projects
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={project.media}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <h2>{project.name}</h2>
                    <h4>{project.stack}</h4>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <a href={project.Github}>Repo</a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Projects;
