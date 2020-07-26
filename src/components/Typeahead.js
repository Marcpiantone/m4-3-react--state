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
  width: 600px;
  -webkit-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
`;

const Centered = styled.div`
  /* width: 500px;
  height: 200px; */
  /* top: 50%;
  left: 50%;*/
  margin-top: 50%;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState("");
  const [narrowedlist, setNarrowedList] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const matchedSelection = (value) => {
    if (value.length > 1) {
      let newArray = suggestions.filter((element) => {
        return element.title.toLowerCase().includes(value.toLowerCase());
      });
      setNarrowedList(newArray);
    } else {
      setNarrowedList([]);
    }
  };

  let selection = narrowedlist[selectedSuggestion];

  const isSelected = (suggestion) =>
    narrowedlist.indexOf(suggestion) === selectedSuggestion ? true : false;

  return (
    <>
      <Centered>
        <Input
          placeholder="search..."
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
            matchedSelection(ev.target.value);
          }}
          onKeyDown={(ev) => {
            console.log(`${selectedSuggestion}`);
            switch (ev.key) {
              case "Enter":
                {
                  handleSelect(selection.title);
                }
                return;
              case "ArrowUp":
                {
                  if (selectedSuggestion > 0)
                    setSelectedSuggestion(selectedSuggestion - 1);
                }
                return;
              case "ArrowDown":
                {
                  if (selectedSuggestion < narrowedlist.length)
                    setSelectedSuggestion(selectedSuggestion + 1);
                }
                return;
            }
          }}
        />
        <Button
          onClick={() => {
            setValue("");
          }}
        >
          Clear
        </Button>
      </Centered>
      {narrowedlist !== [] ? (
        <UList>
          {narrowedlist.map((suggestion) => {
            console.log(isSelected(suggestion));
            return (
              <Suggestion
                suggestion={suggestion}
                handleSelect={handleSelect}
                userInput={value}
                isSelected={isSelected(suggestion)}
                setSelectedSuggestion={setSelectedSuggestion}
                index={narrowedlist.indexOf(suggestion)}
              />
            );
          })}
        </UList>
      ) : null}
    </>
  );
};

export default Typeahead;
