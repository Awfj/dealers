import axios from "axios";

const initialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/dealers"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return authStart(state, action);
    case "AUTH_SUCCESS":
      return authSuccess(state, action);
    case "AUTH_FAIL":
      return authFail(state, action);
    case "AUTH_SIGN_OUT":
      return authSignOut(state, action);
    case "SET_AUTH_REDIRECT_PATH":
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;

const authStart = state => {
  return { ...state, error: null, loading: true };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    idToken: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  };
};

const authFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.path
  };
};

const authSignOut = state => {
  return { ...state, idToken: null, userId: null };
};

export const signOut = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: "AUTH_SIGN_OUT"
  };
};

export const auth = (email, password, isSignUp) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return dispatch => {
    dispatch({ type: "AUTH_START" });
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
    if (!isSignUp) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
    }

    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        const idToken = response.data.idToken;
        const userId = response.data.localId;

        localStorage.setItem("idToken", idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", userId);
        dispatch({ type: "AUTH_SUCCESS", idToken, userId });
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch({ type: "AUTH_FAIL", error });
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) {
      dispatch(signOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(signOut());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch({ type: "AUTH_SUCCESS", idToken, userId });
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(signOut());
    }, expirationTime * 1000);
  };
};
