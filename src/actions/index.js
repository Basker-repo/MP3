import C from '../action-types';


export const addError = message =>
  ({
      type: C.ADD_ERROR,
      payload: message
  })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })
