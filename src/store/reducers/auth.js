import axios from "axios";

const initialState = {
  token: null,
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
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  };
};

const authFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

const authSignOut = state => {
  return { ...state, token: null, userId: null };
};

const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: "AUTH_SIGN_OUT"
  };
};

const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(signOut());
    }, expirationTime * 1000);
  };
};

export const auth = (name, email, password, isSignUp) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return dispatch => {
    dispatch({ type: "AUTH_START" });
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url = null;
    if (isSignUp) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
    } else {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
    }

    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime + response.data.expiresIn * 1000
        );
        const idToken = response.data.idToken;
        const userId = response.data.localId;
        // const expiresIn = response.data.expiresIn;
        // console.log(response.data.localId)

        localStorage.setItem("token", idToken);
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

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(signOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(signOut());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch({ type: "AUTH_SUCCESS", token, userId });
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
