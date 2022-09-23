import React from "react";
import "./Options.styled.jsx";
import { Controls, Item, Button } from "./Options.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map((option) => (
        <Item key={option}>
          <Button
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        </Item>
      ))}
    </Controls>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
