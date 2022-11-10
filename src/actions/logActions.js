import { GET_LOGS, LOGS_ERROR, SET_LOADING } from './types';

//get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
