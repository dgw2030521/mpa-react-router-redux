const initialState = {
  appTitle: 'Default App Title'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return {
        ...state,
        appTitle: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;  