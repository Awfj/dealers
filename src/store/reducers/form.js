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
    case "VERIFY_FORM":
      return verifyForm(state, action);
    case "CHANGE_FORM_ELEMENT":
      return changeFormElement(state, action);
    default:
      return state;
  }
};

export default reducer;

const verifyForm = (state, action) => {
  action.event.preventDefault();
  const formState = { ...state.formState };
  const formData = action.formData;
  let formIsValid = false;

  formState.isValid = checkFormValidity(formData, formIsValid);
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
  const currentFormElement = { ...updatedFormData[formElementId] };
  let formIsValid = false;

  currentFormElement.value = action.event.target.value;
  currentFormElement.valid = checkFormElementsValidity(
    currentFormElement.value,
    currentFormElement.validation
  );
  currentFormElement.touched = true;

  updatedFormData[formElementId] = currentFormElement;

  formState.isValid = checkFormValidity(updatedFormData, formIsValid);
  formState.isSubmitFailed = false;
  formState.isSubmitSucceded = false;

  action.updateState(updatedFormData);

  return {
    ...state,
    formState
  };
};

const checkFormValidity = (formData, formIsValid) => {
  for (let formElement in formData) {
    if (!formData[formElement].valid) {
      formIsValid = false;
      break;
    } else {
      formIsValid = true;
    }
  }
  return formIsValid;
};

const checkFormElementsValidity = (value, rules) => {
  let elementsAreValid = true;

  if (!rules) {
    return true;
  }
  if (rules.required) {
    elementsAreValid = value.trim() !== "" && elementsAreValid;
  }
  if (rules.minLength) {
    elementsAreValid = value.length >= rules.minLength && elementsAreValid;
  }
  if (rules.maxLength) {
    elementsAreValid = value.length <= rules.maxLength && elementsAreValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    elementsAreValid = pattern.test(value) && elementsAreValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    elementsAreValid = pattern.test(value) && elementsAreValid;
  }

  return elementsAreValid;
};
