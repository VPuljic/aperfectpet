import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class SecondQuestion extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Your perfect pet" />
            <br />
            <h2>Your perfect pet likes to:</h2>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("eat")}
              defaultValue={values.eat}
              label="eat"
            >
              Eat a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("run")}
              defaultValue={values.run}
              label="run"
            >
              Run a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("cuddle")}
              defaultValue={values.cuddle}
              label="cuddle"
            >
              Cuddle a lot
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("swim")}
              defaultValue={values.swim}
              label="swim"
            >
              Swim a lot
            </Button>
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
export default SecondQuestion;
