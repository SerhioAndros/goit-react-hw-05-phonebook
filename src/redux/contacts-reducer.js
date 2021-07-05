import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { ADD, DELETE } from "./contacts-types";
import { filterContacts } from "./contacts-actions";

const contactsList = [
  {
    id: "5111c54c-addb-481a-a52d-4c060aae7b87",
    name: "Harry Potter",
    number: "459-12-56",
  },
  {
    id: "3f0a3b82-8cb3-4b7e-ad87-6128ce7c1ed4",
    name: "Hermione Granger",
    number: "443-89-12",
  },
  {
    id: "30e9db78-1eca-4250-8c4c-db9087e6819e",
    name: "Ron Wisley",
    number: "645-17-79",
  },
  {
    id: "5111c54c-addb-481a-a52d-4c06bfg56b87",
    name: "Nevil Longbottom",
    number: "455-46-64",
  },
];

const contactItems = createReducer(contactsList, {
  [ADD]: (state, { payload }) => [...state, payload],
  [DELETE]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const contactFilter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({ contactItems, contactFilter });
