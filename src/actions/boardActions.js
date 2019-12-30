import C from "./action-types";
import uuid from "uuidv4";

export const setActiveBoard = id => {
  return {
    type: C.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: C.ADD_BOARD,
    payload: { title, id }
  };
};
