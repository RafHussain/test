import { combineReducers } from "redux";

const defaultState = null;
const breedData = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_BREED_SUCCESS": {
      return action.breedData;
    }
    default:
      return state;
  }
};

const defaultFavouriteState = [];
const favourites = (state = defaultFavouriteState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      return state.concat(action.favourite);
    }
    case "REMOVE_FAVOURITE": {
      var removed = state.filter((value) => {
        return value.name !== action.favourite;
      });
      return removed;
    }
    default:
      return state;
  }
};

const defaultLoadingState = false;
const isLoading = (state = defaultLoadingState, action) => {
  switch (action.type) {
    case "HANDLE_LOADER": {
      return action.loader;
    }
    default:
      return state;
  }
};

export default combineReducers({
  breedData,
  favourites,
  isLoading,
});
