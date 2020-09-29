const initialValue = {
  loading: false,
  splash: true,
};

const appReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'SPLASH':
      return {
        ...state,
        splash: !state.splash,
      };

    default:
      return state;
  }
};

export default appReducer;
