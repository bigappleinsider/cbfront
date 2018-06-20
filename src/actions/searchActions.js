import axios from 'axios';
import { API_ENDPOINT } from '../constants/api';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const LOADING = 'LOADING';


export const fetchSearch = (endpoint, tag) => async dispatch => {
  dispatch({
    type: LOADING,
  });
  const { data } = await axios.get(`${API_ENDPOINT}/search`, {
    params: { endpoint, tag },
  });
  return dispatch({
    type: RECEIVE_SEARCH,
    payload: data,
  });
}