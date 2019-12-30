import C from "../../actions/action-types";

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_ACTIVE_BOARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;
