const initialState = {}

const checkValidity = (state, action) => {
  console.log("asf");
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_VALIDITY":
      return checkValidity(state, action);
    default:
      return state;
  }
};

export default reducer;
