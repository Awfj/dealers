const submitForm = (state, action) => {
  
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SUBMIT_FORM':
      return submitForm(state, action)
  }
}

export default reducer;