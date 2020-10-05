const initialValue = {
  loading: false,
  splash: true,
};

const appReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'DONE':
      return {
        ...state,
        loading: false,
      };
    case 'SPLASH':
      return {
        ...state,
        splash: false,
      };

    default:
      return state;
  }
};

export default appReducer;
