import C from "../actions/action-types";
import { combineReducers } from 'redux';

// Stages
import listsReducer from "./stages/listsReducer";
import cardsReducer from "./stages/cardsReducer";
import boardsReducer from "./stages/boardsReducer";
import boardOrderReducer from "./stages/boardOrderReducer";
import activeBoardReducer from "./stages/activeBoardReducer";

export const listViewReducer = (state = "grid", action) => {

  if( action.type === C.LIST_VIEW) {

      return action.payload;

  } else {

    return state;

  }

}

export const errorsReducer = (state=[], action) => {

  switch( action.type ) {

    case C.ADD_ERROR:

      return[

        ...state,

        action.payload

      ];

    case C.CLEAR_ERROR:

      return state.filter((error, i) => i !== action.payload);

    default:

      return state;

  }

}

export default combineReducers({

  listView: listViewReducer,

  errors: errorsReducer,

  lists: listsReducer,

  cards: cardsReducer,

  boards: boardsReducer,

  boardOrder: boardOrderReducer,

  activeBoard: activeBoardReducer

});
