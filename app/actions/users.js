import axios from 'axios';

import { API_URL } from '../config/constants';
import { GET_ALL, ADD_USER, DELETE_USER } from './types';

function received(data) {
  return {
    type: GET_ALL,
    data,
  };
}

function getAll() {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `${API_URL}/users`,
    })
    .then(({ status, data }) => {
      if (status === 200) {
        dispatch(received(data));
      }
    });
  };
}

function updateUser(user) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: `${API_URL}/users`,
      data: user,
    })
    .then(({ status, data }) => {
      if (status === 200) {
        dispatch(received(data));
      }
    });
  };
}

function addUser() {
  return {
    type: ADD_USER,
  };
}

function deleted(id) {
  return {
    type: DELETE_USER,
    id,
  };
}

function deleteUser(id) {
  return (dispatch) => {
    axios({
      method: 'DELETE',
      url: `${API_URL}/users`,
      params: { id },
    })
    .then(({ status }) => {
      if (status === 200) {
        dispatch(deleted(id));
      }
    });
  };
}

export { getAll, updateUser, addUser, deleteUser };
