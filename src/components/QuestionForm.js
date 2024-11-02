import React, { Component } from "react";
import PetName from "./PetName.js";
import FirsQuestion from "./FirstQuestion.js";
import SecondQuestion from "./SecondQuestion.js";
import ThirdQuestion from "./ThirdQuestion.js";
import Success from "./Success.js";
import Scrambled from "./Scrambled.js";

export class QuestionForm extends Component {
  state = {
    step: 1,
    petName: "",
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

  // Handle fields change, moves page forward and stores data in localStorage
  handleChange = (input, name) => () => {
    this.setState({ [input]: name });
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    localStorage.setItem(input, JSON.stringify(name));
    localStorage.setItem("step", JSON.stringify(step));
  };

  // Returns state from local storage
  returnStateWithLocalStorage = () => {
    for (let input in this.state) {
      let page = localStorage.getItem("step");
      page = JSON.parse(page);
      this.setState({ step: page + 1 });
      let value = localStorage.getItem(input);
      value = JSON.parse(value);
      this.setState({ [input]: value });
    }
  };
  componentDidMount = () => {
    this.returnStateWithLocalStorage();
  };
  handlePetName = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Resets app to start
  resetState = () => {
    this.setState({
      step: 1,
    });
  };

  // Displays final sentece with random answers
  randomAnswers = () => {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const random = getRndInteger(0, 3);
    const random1 = getRndInteger(0, 3);
    const random2 = getRndInteger(0, 3);
    const allFirstAnswers = ["small", "big", "mid-size", "tall"];
    const allSecondAnswers = ["eat", "run", "cuddle", "swim"];
    const allThirdAnswers = [
      "hot weather",
      "cold weather",
      "rainy weather",
      "snowy weather",
    ];
    let firstRandom = allFirstAnswers[random];
    let secondRandom = allSecondAnswers[random1];
    let thirdRandom = allThirdAnswers[random2];
    this.setState({
      step: 5,
      firstAnswer: firstRandom,
      secondAnswer: secondRandom,
      thirdAnswer: thirdRandom,
    });
  };

  render() {
    const { step } = this.state;
    const { petName, firstAnswer, secondAnswer, thirdAnswer } = this.state;
    const values = { petName, firstAnswer, secondAnswer, thirdAnswer };
    switch (step) {
      case 1:
        return (
          <PetName
            handlePetName={this.handlePetName}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 2:
        return (
          <FirsQuestion
            handleChange={this.handleChange}
            values={values}
            randomAnswers={this.randomAnswers}
          />
        );
      case 3:
        return (
          <SecondQuestion handleChange={this.handleChange} values={values} />
        );
      case 4:
        return (
          <ThirdQuestion handleChange={this.handleChange} values={values} />
        );
      case 5:
        return (
          <Success
            handleChange={this.handleChange}
            resetState={this.resetState}
            values={values}
          />
        );
      case 6:
        return <Scrambled resetState={this.resetState} values={values} />;
      default:
        console.log("This is a small quiz built with React.");
    }
  }
}

export default QuestionForm;
