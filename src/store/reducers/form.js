const initialState = {
  formState: {
    isSubmitFailed: false,
    submitFailedFor: "",
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
  const htmlPath = action.htmlPath;
  const formData = action.formData;
  const signUp = action.formData.signUp;
  const signIn = action.formData.signIn;
  let isValid = false;

  formState.isValid = checkFormValidity(
    htmlPath,
    formData,
    signUp,
    signIn,
    isValid
  );
  formState.submitFailedFor = action.htmlPath;

  if (formState.isValid) {
    formState.isSubmitSucceded = true;
    formState.isSubmitFailed = false;
  } else {
    formState.isSubmitSucceded = false;
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
  let currentFormElement = {};
  let isValid = false;

  if (htmlPath.includes("sign-up")) {
    signUp = { ...formData.signUp };
    currentFormElement = { ...signUp[formElementId] };
  } else if (htmlPath.includes("sign-in")) {
    signIn = { ...formData.signIn };
    currentFormElement = { ...signIn[formElementId] };
  } else if (htmlPath.includes("contact")) {
    currentFormElement = { ...updatedFormData[formElementId] };
  }

  currentFormElement.value = action.event.target.value;
  currentFormElement.valid = checkFormElementsValidity(
    currentFormElement.value,
    currentFormElement.validation
  );
  currentFormElement.touched = true;

  if (htmlPath.includes("sign-up")) {
    signUp[formElementId] = currentFormElement;

    updatedFormData.signUp = signUp;
  } else if (htmlPath.includes("sign-in")) {
    signIn[formElementId] = currentFormElement;

    updatedFormData.signIn = signIn;
  } else if (htmlPath.includes("contact")) {
    updatedFormData[formElementId] = currentFormElement;
  }

  formState.isValid = checkFormValidity(
    htmlPath,
    updatedFormData,
    signUp,
    signIn,
    isValid
  );
  formState.isSubmitFailed = false;
  formState.isSubmitSucceded = false;

  action.updateState(updatedFormData);

  return {
    ...state,
    formState
  };
};

const checkFormValidity = (htmlPath, formData, signUp, signIn, isValid) => {
  if (htmlPath.includes("sign-up")) {
    for (let formElement in signUp) {
      if (!signUp[formElement].valid) {
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    }
  } else if (htmlPath.includes("sign-in")) {
    for (let formElement in signIn) {
      if (!signIn[formElement].valid) {
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    }
  } else if (htmlPath.includes("contact")) {
    for (let formElement in formData) {
      if (!formData[formElement].valid) {
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    }
  }
  return isValid;
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
