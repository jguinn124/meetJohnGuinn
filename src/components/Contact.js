import React from "react";
import emailjs from "emailjs-com";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContactUs() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "template_dzx70sl",
        e.target,
        "user_dfjjjh6Lgl5QtjyH5KaQ4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.alert(
      "Thank you for your Submission \n \n John will get back to you shortly!"
    );
  }

  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ paddingTop: "40px", paddingBottom: "30vh" }}
      >
        <Grid item>
          <Typography variant="h5">Contact</Typography>

          <Card className={classes.root}>
            <CardContent>
              <form className="contact-form" onSubmit={sendEmail}>
                <TextField
                  id="outlined-basic"
                  type="hidden"
                  name="contact_number"
                />
                <Typography>Name</Typography>
                <TextField id="outlined-basic" type="text" name="user_name" />
                <Typography style={{ paddingTop: "40px" }}>Email</Typography>
                <TextField id="outlined-basic" type="email" name="user_email" />
                <Typography style={{ paddingTop: "40px" }}>Message</Typography>
                <TextField
                  style={{ paddingBottom: "40px" }}
                  multiline
                  name="message"
                />
                <br />
                <input type="submit" value="Send" />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
