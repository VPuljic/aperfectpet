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
export class ThirdQuestion extends Component {
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
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "hot weather")}
              defaultValue={values.hot}
              label="hot"
            >
              Hot weather
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "cold weather")}
              defaultValue={values.cold}
              label="cold"
            >
              Cold weather
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "rain")}
              defaultValue={values.rain}
              label="rain"
            >
              Rainy weather
            </MyButton>
            <MyButton
              color="secondary"
              variant="contained"
              onClick={handleChange("thirdAnswer", "snow")}
              defaultValue={values.snowy}
              label="snow"
            >
              Snowy weather
            </MyButton>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
export default ThirdQuestion;
