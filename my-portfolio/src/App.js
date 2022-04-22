import logo from './logo.svg';
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
          padding: "10",
        }}
        elevation={0}
      >
        <h1>Haleem Hamid</h1>
      </AppBar>
      <Greeting />
      <Projects />
    </div>
  );
}

export default App;
