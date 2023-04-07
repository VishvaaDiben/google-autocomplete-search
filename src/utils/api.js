import { API_ENDPOINT } from "../config";
import axios from "axios";

export const autocompletePlaces = async (input) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/autocomplete/json`, {
      params: {
        input,
        types: "geocode",
        key: process.env.API_KEY,
      },
    });
    return response.data.predictions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const placesDetails = async (input) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/details/json`, {
      params: {
        place_id,
        fields: "geometry,formatted_address,name",
        key: process.env.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
