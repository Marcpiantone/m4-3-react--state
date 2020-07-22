import React, { useState } from "react";

import GlobalStyles from "./GlobalStyles";

import styled from "styled-components";

import Suggestion from "./Suggestion";

const Input = styled.input`
  border: solid lightgrey 1px;
  font-size: 1.5em;
  border-radius: 5px;
  margin: 2px;
  padding: 15px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 1.5em;
  border: solid lightgrey 1px;
  border-radius: 5px;
  margin: 2px;
  padding: 15px;
  background-color: #00008b;
  color: white;
  outline: blue;
  &:focus {
    outline: none;
  }
`;

const UList = styled.ul`
  -webkit-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
`;

const Wrapper = styled.div``;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState("");
  const [narrowedlist, setNarrowedList] = useState([]);
  const [selection, setSelection] = useState("");

  const matchedSelection = (value) => {
    if (value !== "") {
      let newArray = suggestions.filter((element) => {
        return element.title.toLowerCase().includes(value.toLowerCase());
      });
      setNarrowedList(newArray);
    }
  };

  return (
    <>
      <Input
        placeholder="search..."
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
          matchedSelection(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") handleSelect(value);
        }}
      />
      <Button>Clear</Button>

      <UList>
        {narrowedlist.map((suggestion) => {
          return (
            <Suggestion suggestion={suggestion} handleSelect={handleSelect} />
          );
        })}
      </UList>
    </>
  );
};

export default Typeahead;
