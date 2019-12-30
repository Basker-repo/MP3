import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const consoleMessages = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    result = next(action)

    let state = store.getState()

    console.log(`

      view: ${JSON.stringify(state)}

    `)

    console.groupEnd()

    return result

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, consoleMessages));
  let persistor = persistStore(store);
  return { store, persistor };
};

// export default initialState => applyMiddleware(thunk,consoleMessages)(createStore)(persistedReducer, initialState)
