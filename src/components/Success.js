import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class Success extends Component {
  render() {
    const { handleChange } = this.props;
    const {
      resetState,
      values: { firstAnswer, secondAnswer, thirdAnswer },
    } = this.props;
    const finalSentence = `My pet is ${firstAnswer}, and although he likes to 
              ${secondAnswer}, he really hates ${thirdAnswer}.`;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <Typography variant="h4">{finalSentence}</Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={handleChange()}
              size="small"
            >
              Scramble
            </Button>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={resetState}
              size="small"
            >
              Retry Test
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
