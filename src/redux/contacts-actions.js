import { ADD, DELETE, FILTER } from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addContact = createAction(ADD, ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE);

const filterContacts = createAction(FILTER);

export { addContact, deleteContact, filterContacts };
