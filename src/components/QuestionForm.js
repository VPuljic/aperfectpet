import React, { Component } from "react";
import FirsQuestion from "./FirstQuestion.js";
import SecondQuestion from "./SecondQuestion.js";
import ThirdQuestion from "./ThirdQuestion.js";
import Success from "./Success.js";
import Scrambled from "./Scrambled.js";

export class QuestionForm extends Component {
  state = {
    step: 1,
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
  };
  // Handle fields change and moves page forward
  handleChange = (input, name) => () => {
    this.setState({ [input]: name });
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Resets app to start
  resetState = () => {
    this.setState({
      step: 1,
      firstAnswer: "",
      secondAnswer: "",
      thirdAnswer: "",
    });
  };
  // // Scrambles chosen answers
  // scrambleAnswers = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step + 1,
  //   });
  // };
  render() {
    const { step } = this.state;
    const { firstAnswer, secondAnswer, thirdAnswer } = this.state;
    const values = { firstAnswer, secondAnswer, thirdAnswer };
    switch (step) {
      case 1:
        return (
          <FirsQuestion handleChange={this.handleChange} values={values} />
        );
      case 2:
        return (
          <SecondQuestion handleChange={this.handleChange} values={values} />
        );
      case 3:
        return (
          <ThirdQuestion handleChange={this.handleChange} values={values} />
        );
      case 4:
        return (
          <Success
            handleChange={this.handleChange}
            resetState={this.resetState}
            values={values}
          />
        );
      case 5:
        return <Scrambled resetState={this.resetState} values={values} />;
      default:
        console.log("This is a small quiz built with React.");
    }
  }
}

export default QuestionForm;
