import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

export class FirstQuestion extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
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
            <Typography variant="body1">Your perfect pet is:</Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("firstAnswer", "small")}
              defaultValue={values.firstAnswer}
              value="small"
            >
              Small
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("firstAnswer", "big")}
              defaultValue={values.firstAnswer}
              value="big"
            >
              Big
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("firstAnswer", "midSize")}
              defaultValue={values.firstAnswer}
              value="midSize"
            >
              Mid-size
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleChange("firstAnswer", "tall")}
              defaultValue={values.firstAnswer}
              value="tall"
            >
              Tall
            </Button>
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default FirstQuestion;
