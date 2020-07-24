import React, { useState } from "react";

import GlobalStyles from "./GlobalStyles";

import styled from "styled-components";

const SuggestionLItem = styled.li`
  line-height: 1.5em;
  margin: 5px;

  &:hover {
    background-color: #ffffcc;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const boldPrediction = (suggestion, userInput) => {
  const title = suggestion.title.toLowerCase();
  const index = title.indexOf(userInput);
  const firstHalf = title.slice(0, index + userInput.length);
  const secondHalf = title.slice(index + userInput.length);
  return { firstHalf, secondHalf };
};

const Suggestion = ({ suggestion, handleSelect, userInput }) => {
  const titleBolded = boldPrediction(suggestion, userInput);

  console.log(`${titleBolded["firstHalf"]}`);
  return (
    <SuggestionLItem
      key={suggestion.id}
      onClick={() => handleSelect(suggestion.title)}
    >
      {titleBolded["firstHalf"]}
      <Prediction>{titleBolded["secondHalf"]}</Prediction>
    </SuggestionLItem>
  );
};

export default Suggestion;
