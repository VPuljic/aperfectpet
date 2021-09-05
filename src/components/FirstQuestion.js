import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class FirstQuestion extends Component {
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
            <h2>Your perfect pet is:</h2>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("small")}
              defaultValue={values.small}
              label="small"
            >
              Small
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("big")}
              defaultValue={values.big}
              label="big"
            >
              Big
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("midSize")}
              defaultValue={values.midSize}
              label="midSize"
            >
              Mid-size
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("tall")}
              defaultValue={values.tall}
              label="tall"
            >
              Tall
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
export default FirstQuestion;
