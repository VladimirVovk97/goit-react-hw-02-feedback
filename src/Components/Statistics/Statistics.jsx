import React from "react";
import PropTypes from "prop-types";
import { Item, List, Value } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statistics = [
    { key: "id-1", value: good, name: "Good" },
    { key: "id-2", value: neutral, name: "Neutral" },
    { key: "id-3", value: bad, name: "Bad" },
    { key: "id-4", value: total, name: "Total" },
    { key: "id-5", value: positivePercentage, name: "Positive feedback" },
  ];

  return (
    <List>
      {statistics.map(({ key, value, name }) => (
        <Item key={key}>
          {name}:{" "}
          <Value>
            {value}
            {name === "Positive feedback" && "%"}
          </Value>
        </Item>
      ))}
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
