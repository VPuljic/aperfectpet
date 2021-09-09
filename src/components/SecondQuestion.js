import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
export class SecondQuestion extends Component {
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
            <Typography variant="body1">Your perfect pet likes to:</Typography>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "eat")}
              defaultValue={values.eat}
              label="eat"
            >
              Eat a lot
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "run")}
              defaultValue={values.run}
              label="run"
            >
              Run a lot
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "cuddle")}
              defaultValue={values.cuddle}
              label="cuddle"
            >
              Cuddle a lot
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("secondAnswer", "swim")}
              defaultValue={values.swim}
              label="swim"
            >
              Swim a lot
            </MyButton>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default SecondQuestion;
