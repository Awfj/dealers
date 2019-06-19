const initialState = {
  formState: {
    isSubmitFailed: false,
    isValid: false,
    isSubmitSucceded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return submitForm(state, action);
    case "CHANGE_FORM_ELEMENT":
      return changeFormElement(state, action);
    default:
      return state;
  }
};

export default reducer;

const submitForm = (state, action) => {
  action.event.preventDefault();

  const formState = { ...state.formState };

  if (formState.isValid) {
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

const changeFormElement = (state, action) => {
  const formData = action.formData;
  const updatedFormData = { ...formData };
  const formState = { ...state.formState };
  const formElementId = action.formElementId;
  const htmlPath = action.htmlPath;
  let signUp = {};
  let signIn = {};
  let formElement = {};
  let isValid = true;

  if (htmlPath && htmlPath.includes("sign-up")) {
    signUp = { ...formData.signUp };
    formElement = { ...signUp[formElementId] };
  } else if (htmlPath && htmlPath.includes("sign-in")) {
    signIn = { ...formData.signIn };
    formElement = { ...signIn[formElementId] };
  } else {
    formElement = { ...updatedFormData[formElementId] };
  }

  formElement.value = action.event.target.value;
  formElement.valid = checkFormElementsValidity(
    formElement.value,
    formElement.validation
  );
  formElement.touched = true;

  if (htmlPath && htmlPath.includes("sign-up")) {
    signUp[formElementId] = formElement;
    for (let formElementId in signUp) {
      isValid = signUp[formElementId].valid && isValid;
    }
    updatedFormData.signUp = signUp;
  } else if (htmlPath && htmlPath.includes("sign-in")) {
    signIn[formElementId] = formElement;
    for (let formElementId in signIn) {
      isValid = signIn[formElementId].valid && isValid;
    }
    updatedFormData.signIn = signIn;
  } else {
    updatedFormData[formElementId] = formElement;
    for (let formElementId in updatedFormData) {
      isValid = updatedFormData[formElementId].valid && isValid;
    }
  }

  formState.isValid = isValid;

  action.updateState(updatedFormData);

  return {
    ...state,
    formState
  };
};

const checkFormElementsValidity = (value, rules) => {
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
