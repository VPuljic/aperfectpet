import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';
import theme from './theme';

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #333 30%, #999 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export class PetName extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handlePetName } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Your perfect pet name">
              <Toolbar>
                <Typography variant="subtitle1">My Perfect Pet</Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="body1">Your perfect pet name is:</Typography>
            <TextField
              placeholder="Enter Your Pet Name"
              label="Pet Name"
              onChange={handlePetName("petName")}
              defaultValue={values.petName}
              margin="normal"
              fullWidth
            />
            <MyButton onClick={this.continue}>
              Next
            </MyButton>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default PetName;
