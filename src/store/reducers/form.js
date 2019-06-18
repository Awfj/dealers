const initialState = {
  formState: {
    isSubmitFailed: false,
    isSubmitSucceded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return submitForm(state, action);
    default:
      return state;
  }
};

export default reducer;

const submitForm = (state, action) => {
  action.event.preventDefault();

  const formState = { ...state.formState };

  if (action.isFormValid) {
    formState.isSubmitSucceded = true;
    formState.isSubmitFailed = false;
  } else {
    formState.isSubmitFailed = true;
  }
  return {
    ...state,
    formState
  };
};

export const checkFormElementsValidity = (value, rules) => {
  return () => {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };
};
