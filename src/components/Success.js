import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class Success extends Component {
  render() {
    const {
      values: { firstAnswer, secondAnswer, thirdAnswer },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <Typography variant="h4">
              My pet is {firstAnswer}, and although he likes to 
              {secondAnswer}, he really hates {thirdAnswer}.
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={this.reset}
              size="small"
            >
              Scramble
            </Button>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.reset}
              size="small"
            >
              Reset
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
