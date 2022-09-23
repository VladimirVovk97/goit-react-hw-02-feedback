import React from "react";
import "./Options.styled.jsx";
import { Controls, MainHeading, Button } from "./Options.styled";

const FeedbackOptions = ({
  firstIncrement,
  secondIncrement,
  thirdIncrement,
}) => (
  <Controls>
    <MainHeading>Please leave feedback</MainHeading>
    <Button onClick={firstIncrement}>Good</Button>
    <Button onClick={secondIncrement}>Neutral</Button>
    <Button onClick={thirdIncrement}>Bad</Button>
  </Controls>
);

export default FeedbackOptions;
