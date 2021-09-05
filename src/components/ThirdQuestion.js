import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class ThirdQuestion extends Component {
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
            <h2>Your perfect pet hates:</h2>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("hot")}
              defaultValue={values.hot}
              label="hot"
            >
              Hot weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("cold")}
              defaultValue={values.cold}
              label="cold"
            >
              Cold weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("rain")}
              defaultValue={values.rain}
              label="rain"
            >
              Rainy weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("snowy")}
              defaultValue={values.snowy}
              label="snowy"
            >
              Snowy weather
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
export default ThirdQuestion;
