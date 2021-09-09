import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #333 30%, #999 90%)",
  border: 0,
  borderRadius: 3,
  marginBottom: 10,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});
export class Success extends Component {
  render() {
    const { handleChange } = this.props;
    const {
      resetState,
      values: { petName, firstAnswer, secondAnswer, thirdAnswer },
    } = this.props;
    const finalSentence = `My pet ${petName} is ${firstAnswer}, and although he likes to 
              ${secondAnswer}, he really hates ${thirdAnswer}.`;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <Typography variant="h4">{finalSentence}</Typography>
            <MyButton
              color="primary"
              variant="contained"
              onClick={handleChange()}
              size="small"
            >
              Scramble
            </MyButton>
            <br />
            <MyButton
              color="primary"
              variant="contained"
              onClick={resetState}
              size="small"
            >
              Retry Test
            </MyButton>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
