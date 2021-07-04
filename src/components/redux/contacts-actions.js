import { ADD, DELETE, FILTER } from "./contacts-types";
import { v4 as uuid } from "uuid";

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: uuid(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE,
  payload: contactId,
});

const filterContacts = (value) => ({
  type: FILTER,
  payload: value,
});

export { addContact, deleteContact, filterContacts };
