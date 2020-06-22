import { Api } from "../services/api";
import { toast } from "react-toastify";

export const getBreed = (breed) => async (dispatch) => {
  const api = new Api();
  dispatch({
    type: "GET_BREED",
  });
  dispatch({
    type: "HANDLE_LOADER",
    loader: true,
  });
  try {
    var breedImage = await api.home.getBreed(breed);
    dispatch({
      type: "GET_BREED_SUCCESS",
      breedData: { name: breed, image: breedImage.message },
    });
    dispatch({
      type: "HANDLE_LOADER",
      loader: false,
    });
    return breedImage;
  } catch (error) {
    dispatch({
      type: "GET_BREED_ERROR",
      error,
    });
    dispatch({
      type: "HANDLE_LOADER",
      loader: false,
    });
    toast.error(error.response.data.message);
    return false;
  }
};

export const getRandomBreed = () => async (dispatch) => {
  const api = new Api();
  dispatch({
    type: "GET_BREED",
  });
  dispatch({
    type: "HANDLE_LOADER",
    loader: true,
  });
  try {
    var breedImage = await api.home.getRandomBreed();
    var breedRes = breedImage.message.split("/breeds/");
    var breedNameSplitByName = breedRes[1].split("/");
    var breedName = breedNameSplitByName[0];
    var breed = { name: breedName, image: breedImage.message };
    if (breedName.indexOf("-") !== -1) {
      breedName = breedName.split("-");
      breed = {
        name: `${breedName[1]} ${breedName[0]}`,
        image: breedImage.message,
      };
    }

    dispatch({
      type: "GET_BREED_SUCCESS",
      breedData: breed,
    });
    dispatch({
      type: "HANDLE_LOADER",
      loader: false,
    });
    return breedImage;
  } catch (error) {
    dispatch({
      type: "GET_BREED_ERROR",
      error,
    });
    dispatch({
      type: "HANDLE_LOADER",
      loader: false,
    });
    toast.error("Please try again later");
    return false;
  }
};

export const addFavourite = (favourite) => async (dispatch) => {
  dispatch({
    type: "ADD_FAVOURITE",
    favourite,
  });
};
export const removeFavourite = (favourite) => async (dispatch) => {
  dispatch({
    type: "REMOVE_FAVOURITE",
    favourite,
  });
};
