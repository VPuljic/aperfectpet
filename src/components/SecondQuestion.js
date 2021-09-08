import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class SecondQuestion extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Your perfect pet">
              <Toolbar>
                <Typography variant="subtitle1">My Perfect Pet</Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="body1">Your perfect pet likes to:</Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "eat")}
              defaultValue={values.eat}
              label="eat"
            >
              Eat a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "run")}
              defaultValue={values.run}
              label="run"
            >
              Run a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "cuddle")}
              defaultValue={values.cuddle}
              label="cuddle"
            >
              Cuddle a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "swim")}
              defaultValue={values.swim}
              label="swim"
            >
              Swim a lot
            </Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default SecondQuestion;
