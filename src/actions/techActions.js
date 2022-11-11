import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECH_ERROR,
  SET_LOADING,
} from '../actions/types';

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.statusText,
    });
  }
};

//add tech
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.statusText,
    });
  }
};

//delete tech
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.data,
    });
  }
};
