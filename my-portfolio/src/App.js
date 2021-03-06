import React from "react";
import Greeting from "./components/Greeting";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AppBar, Button, Modal, Typography, Box } from "@mui/material/";

import "./App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(176, 196, 222, 0.8);",
  border: "2px solid #000",
  borderRadius: "15%",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <u>Lets Connect!</u>
          </Typography>
          <Contact
            sx={{
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Box>
      </Modal>

      {/* App Bar */}
      <AppBar
        sx={{
          background: "black",
          pl: "3%",
          pr: "3%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h3 className="nav-name">Haleem Hamid</h3>
        <div className="nav-menu">
          <Button
            onClick={handleOpen}
            sx={{
              color: "white",
            }}
          >
            Contact Me
          </Button>
        </div>
      </AppBar>
      <Greeting />
      <Projects />
    </div>
  );
}

export default App;
