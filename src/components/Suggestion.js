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

const Suggestion = ({ suggestion, handleSelect }) => {
  return (
    <SuggestionLItem
      key={suggestion.id}
      onClick={() => handleSelect(suggestion.title)}
    >
      {suggestion.title}
    </SuggestionLItem>
  );
};

export default Suggestion;
