import { SIGN_UP, REGISTER_ADD, ERROR_MSG } from "../actions/authActions";

const iniState = {
  userid: "",
  token: "",
  access: [],
  fname: "",
  lname: "",
  email: "",
  contactno: "",
  password: "",
  repassword: "",
  registerData: []
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
    case REGISTER_ADD:
      return {
        ...state,
        registerData: [...registerData, action.payload]
      };
  }
  return state;
};
