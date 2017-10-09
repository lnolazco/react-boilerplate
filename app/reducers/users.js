import { List, Map, fromJS } from 'immutable';

import { GET_ALL, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = List();

export default function app(users = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return List(fromJS(action.data));
    case ADD_USER:
      return users.push(Map({ id: 0, firstname: '', surname: '' }));
    case DELETE_USER:
      return users.filter(user => user.get('id') !== action.id);
    default:
      return users;
  }
}
