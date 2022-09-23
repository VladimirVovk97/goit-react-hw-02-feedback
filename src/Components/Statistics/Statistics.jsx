import React from "react";
import { StatisticTitle, Description, Value } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad }) => (
  <div className="Statistics">
    <StatisticTitle>Statistics</StatisticTitle>
    <Description>
      Good:
      <Value>{good}</Value>
    </Description>
    <Description>
      Neutral:
      <Value>{neutral}</Value>
    </Description>
    <Description>
      Bad:
      <Value>{bad}</Value>
    </Description>
  </div>
);

export default Statistics;
