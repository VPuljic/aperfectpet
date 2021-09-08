import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class Scrambled extends Component {
  render() {
    const {
      resetState,
      values: { firstAnswer, secondAnswer, thirdAnswer },
    } = this.props;
    let firstScrAnswer = "";
    firstScrAnswer = firstAnswer
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    let secondScrAnswer = "";
    secondScrAnswer = secondAnswer
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    let thirdScrAnswer = "";
    thirdScrAnswer = thirdAnswer
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    const finalSentence = `My pet is ${firstScrAnswer}, and although he likes to 
              ${secondScrAnswer}, he really hates ${thirdScrAnswer}.`;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <Typography variant="h4">{finalSentence}</Typography>
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

export default Scrambled;
