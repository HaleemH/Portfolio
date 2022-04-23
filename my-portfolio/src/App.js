import Greeting from './components/Greeting'
import Projects from './components/Projects'
import { AppBar } from "@mui/material/";

import './App.css';

function App() {
  return (
    <div className="App">
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
        <h5>Contact Me</h5>
      </AppBar>
      <Greeting />
      <Projects />
    </div>
  );
}

export default App;
