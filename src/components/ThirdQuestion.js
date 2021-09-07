import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
            <AppBar title="Your perfect pet">
              <Toolbar>
                <Typography variant="subtitle1">My Perfect Pet</Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="body1">Your perfect pet hates:</Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer")}
              defaultValue={values.hot}
              label="hot"
            >
              Hot weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "cold")}
              defaultValue={values.cold}
              label="cold"
            >
              Cold weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "rain")}
              defaultValue={values.rain}
              label="rain"
            >
              Rainy weather
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "snowy")}
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
