import { SIGN_UP } from "../actions/authActions";

const iniState = {
  userid: "",
  token: "",
  access: []
};

export default (state = iniState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        userid: action.payload,
        token: action.payload,
        access: action.payload
      };
  }
  return state;
};
