import React, { Component } from "react";
import Options from "./Components/Options/Options";
import Statistics from "./Components/Statistics/Statistics";
import FeedBackSection from "./Components/FeedBackSection/FeedbackSection";
import Container from "./Components/Container/Container";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  totalFeedback = 0;
  positiveFeedbackPercentage = 0;

  countTotalFeedback() {
    return (this.totalFeedback =
      this.state.good + this.state.neutral + this.state.bad);
  }

  countPositiveFeedbackPercentage() {
    return (this.positiveFeedbackPercentage = Math.round(
      (this.state.good / this.totalFeedback) * 100
    ));
  }

  handleIncrement = (element) => {
    this.setState((prevState) => ({ [element]: prevState[element] + 1 }));
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <FeedBackSection title="Please leave feedback">
          <Options
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrement}
          />
        </FeedBackSection>

        <FeedBackSection title="Statistics">
          {this.totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback}
              positivePercentage={this.positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedBackSection>
      </Container>
    );
  }
}

export default App;
