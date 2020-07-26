import React, { useState } from "react";

import GlobalStyles from "./GlobalStyles";

import styled from "styled-components";

const SuggestionLItem = styled.li`
  line-height: 1.5em;
  margin: 5px;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Type = styled.p`
  color: purple;
  font-style: italic;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.5em;
`;

const boldPrediction = (suggestion, userInput) => {
  const title = suggestion.title.toLowerCase();
  const index = title.indexOf(userInput);
  const firstHalf = title.slice(0, index + userInput.length);
  const secondHalf = title.slice(index + userInput.length);
  return { firstHalf, secondHalf };
};

const Suggestion = ({
  suggestion,
  handleSelect,
  userInput,
  isSelected,
  setSelectedSuggestion,
  index,
}) => {
  const titleBolded = boldPrediction(suggestion, userInput);
  console.log(index);
  return (
    <SuggestionLItem
      key={suggestion.id}
      onClick={() => handleSelect(suggestion.title)}
      style={{
        background: isSelected ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
      }}
      onMouseEnter={() => setSelectedSuggestion(index)}
    >
      <Text>
        {titleBolded["firstHalf"]}
        <Prediction>{titleBolded["secondHalf"]}</Prediction>
      </Text>

      <Type>{suggestion.categoryId}</Type>
    </SuggestionLItem>
  );
};

export default Suggestion;
