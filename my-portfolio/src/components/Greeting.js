import React from 'react'
import {AppBar} from "@mui/material/"

function Greeting() {
  return (
    <div className="greeting">
      <AppBar
        sx={{
          background: "none",
          marginL: "10",
        }}
        elevation={0}
      >
        <h1>Haleem Hamid</h1>
      </AppBar>
      <p>
        <h2>Welcome to my <br/> portfolio!</h2>
      </p>
    </div>
  );
}

export default Greeting