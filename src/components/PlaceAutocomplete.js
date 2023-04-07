import React, { useState } from 'react';
import {autocompletePlaces, placesDetails} from "../utils"

import { AutoComplete } from 'antd';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

const PlaceAutocomplete = ({ onSelect }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = debounce(async (value) => {
    if (value) {
      const data = autocompletePlaces(value);
      setOptions(data.predictions.map((prediction) => ({
        value: prediction.description,
        label: prediction.description,
        placeId: prediction.place_id,
      })));
    } else {
      setOptions([]);
    }
  }, 500);

  const handleSelect = async (value, option) => {
    const data = placesDetails(option)
    onSelect(data.result.geometry.location, data.result.formatted_address, data.result.name);
  };

  return (
    <AutoComplete
      options={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      placeholder="Enter a location"
      filterOption={false}
    />
  );
};

PlaceAutocomplete.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default PlaceAutocomplete;

