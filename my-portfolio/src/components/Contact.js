import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

function Contact() {
  return (
    <>
      <div className="contact-info">
        <a href="mailto:hhamidbiz@gmail.com">
          <EmailIcon
            sx={{
              color: "black",
              fontSize: "4rem",
            }}
          />
        </a>
        <a href=" https://github.com/HaleemH" target="_blank">
          <GitHubIcon
            sx={{
              color: "black",
              fontSize: "4rem",
            }}
          />
        </a>
        <a href=" https://www.linkedin.com/in/haleemhamid/" target="_blank">
          <LinkedInIcon
            sx={{
              color: "black",
              fontSize: "4rem",
            }}
          />
        </a>
        <a href="https://medium.com/@Haleem_H" target="_blank">
          <ArticleIcon
            sx={{
              color: "black",
              fontSize: "4rem",
            }}
          />
        </a>
      </div>
      <div align="center">
        <br />
        Haleem Hamid
        <br />
        Los Angeles, CA
        <br />
        (310)415-1620
    
      </div>
    </>
  );
}

export default Contact;
