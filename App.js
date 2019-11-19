import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import AppNavi from "./navigation/AppNavigator";
import FlexBoxes from "./flexbox/flexSamples";

import authReducer from "./store/reducers/authReducers";

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavi />
    </Provider>
  );
}
