export const SIGN_UP = "SIGN_UP";
export const ERROR_MSG = "ERROR_MSG";
/// create a new user using firebase db ///
export const addUser = (email, password) => async dispatch => {
  try {
    console.log(email, password);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBj5r6wDCe77_0tyGOoZZAf05ll_XWsi4U",
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
