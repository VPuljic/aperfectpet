import React, { Component } from "react";
import FirsQuestion from "./FirstQuestion.js";
import SecondQuestion from "./SecondQuestion.js";
import ThirdQuestion from "./ThirdQuestion.js";
import Success from "./Success.js";

export class QuestionForm extends Component {
  state = {
    step: 1,
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Handle fields change
  handleChange = (input, name) => () => {
    this.setState({ [input]: name });
  };
  render() {
    const { step } = this.state;
    const { firstAnswer, secondAnswer, thirdAnswer } = this.state;
    const values = { firstAnswer, secondAnswer, thirdAnswer };
    switch (step) {
      case 1:
        return (
          <FirsQuestion
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondQuestion
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdQuestion
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
        console.log("This is a small quiz built with React.");
    }
  }
}

export default QuestionForm;
