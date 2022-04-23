import React from "react";
import { projects } from "./database";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Projects() {
  console.log(projects);

  return (
    <div className="main-project">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Container maxWidth="xs">
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
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item key={project.name}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    elevation={9}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        p: "10.25%",
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
                      <p>{project.description}</p>
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
    </div>
  );
}

export default Projects;
