import React from "react";
import Options from "./Components/Options/Options";
import Statistics from "./Components/Statistics/Statistics";
import { FeedBackSection } from "./Components/FeedBackSection/FeedBackSection.styled";

class App extends React.Component {
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

  firstHandleIncrement = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  secondHandleIncrement = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  thirdHandleIncrement = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <FeedBackSection>
        <Options
          firstIncrement={this.firstHandleIncrement}
          secondIncrement={this.secondHandleIncrement}
          thirdIncrement={this.thirdHandleIncrement}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </FeedBackSection>
    );
  }
}

export default App;
