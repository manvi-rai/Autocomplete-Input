// src/Autocomplete.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const keywords = [
  "Current Price", "Price to Earning", "Market Capitalization", "Dividend yield",
  "Net Profit latest quarter", "YOY Quarterly profit growth", "Sales latest quarter",
  "YOY Quarterly sales growth", "Return on capital employed", "Sales", "OPM",
  "Profit after tax", "Profit after tax latest quarter", "Sales growth 3Years",
  "Profit growth 3Years", "Sales growth 5Years", "Profit growth 5Years",
  "Average return on equity 5Years", "Average return on equity 3Years",
  "Return over 1year", "Return over 3years", "Return over 5years", "Price to book value",
  "Return on assets", "Debt to equity", "Return on equity", "EPS", "Debt", "Promoter holding",
  "Change in promoter holding", "Earnings yield", "Pledged percentage", "Industry PE",
  "Sales growth", "Profit growth", "Price to Sales", "Price to Free Cash Flow", "EVEBITDA",
  "Enterprise Value", "Current ratio", "Interest Coverage Ratio", "PEG Ratio",
  "Return over 3months", "Return over 6months", "Average Earnings 10Year",
  "Average dividend payout 3years", "Average return on capital employed 7Years"
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : keywords.filter(keyword =>
    keyword.toLowerCase().includes(inputValue)
  );
};

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Type a keyword',
    value,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default Autocomplete;
