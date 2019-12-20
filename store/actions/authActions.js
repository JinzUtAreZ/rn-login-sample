export const SIGN_UP = "SIGN_UP";
export const REGISTER_ADD = "REGISTER_ADD";
export const ERROR_MSG = "ERROR_MSG";
/// create a new user using firebase db ///
import env from "../../env";

export const addUser = (email, password) => async dispatch => {
  try {
    console.log(email, password);
    const apiKey = env().googleApiKey;
    const response = await fetch(
      `https://identitytoolkit.googleaps.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      console.log(results);
      throw new error("Something went wrong");
    }

    const results = await response.json();
    console.log(results);
    dispatch({
      type: SIGN_UP,
      payload: results
    });
  } catch (err) {
    dispatch({
      type: ERROR_MSG,
      payload: err.response.statusText
    });
  }
};

export const Register_User = () => async dispatch => {
  try {
  } catch (err) {}
};
