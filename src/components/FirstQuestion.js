import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export class FirstQuestion extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
const { values, handleChange } = this.props;
  render(
    <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter" />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            </Dialog>
        </>
      </MuiThemeProvider>
  );
}

export default FirstQuestion;

