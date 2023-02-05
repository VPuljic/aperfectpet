import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  marginBottom: 10,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});
export class FirstQuestion extends Component {
  render() {
    const { values, handleChange, randomAnswers } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Your perfect pet">
              <Toolbar>
                <Typography variant="subtitle1">My Perfect Pet</Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="body1">Your perfect pet is:</Typography>
            <MyButton
              onClick={handleChange("firstAnswer", "small")}
              defaultValue={values.firstAnswer}
              value="small"
            >
              Small
            </MyButton>
            <MyButton
              onClick={handleChange("firstAnswer", "big")}
              defaultValue={values.firstAnswer}
              value="big"
            >
              Big
            </MyButton>
            <MyButton
              onClick={handleChange("firstAnswer", "midSize")}
              defaultValue={values.firstAnswer}
              value="midSize"
            >
              Mid-size
            </MyButton>
            <MyButton
              onClick={handleChange("firstAnswer", "tall")}
              defaultValue={values.firstAnswer}
              value="tall"
            >
              Tall
            </MyButton>
            <br />
            <Button color="primary" variant="contained" onClick={randomAnswers}>
              Randomize
            </Button>
          </Dialog>
          <div>this is from first</div>
        </>
      </MuiThemeProvider>
    );
  }
}
export default FirstQuestion;
