import C from "./action-types";
import uuid from "uuidv4";

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: C.ADD_CARD,
    payload: { text, listID, id }
  };
};

export const editCard = (id, listID, newText) => {
  return {
    type: C.EDIT_CARD,
    payload: { id, listID, newText }
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: C.DELETE_CARD,
    payload: { id, listID }
  };
};
