export const initialState = {
  isLoading: false,
  error: null,
  link: "",
  result: null,
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case "SET_LINK":
      return {
        ...state,
        link: action.link,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };

    case "SET_RESULT":
      return {
        ...state,
        result: action.result,
      };

    case "SET_HISTORY":
      return {
        ...state,
        history: action.history,
      };

    default:
      break;
  }
};

export default reducer;
