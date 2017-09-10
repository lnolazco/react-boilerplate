import axios from 'axios';

import { GET_ALL } from './types';

function received(data) {
  return {
    type: GET_ALL,
    data,
  };
}

export function getAll() {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://localhost:8181/users',
    })
    .then(({ status, data }) => {
      if (status === 200) {
        dispatch(received(data));
      }
    });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://localhost:8181/users',
      data: user,
    })
    .then(({ status, data }) => {
      if (status === 200) {
        dispatch(received(data));
      }
    });
  };
}

export default { getAll, updateUser };
