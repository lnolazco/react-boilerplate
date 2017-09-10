import { GET_ALL, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
  data: [],
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return { ...state, data: action.data };
    case ADD_USER:
      return { ...state, data: [...state.data, { id: 0, firstname: '', surname: '' }] };
    case DELETE_USER:
      const userIdx = state.data.findIndex(user => user.id === action.id);
      if (userIdx > -1) {
        return { ...state,
          data: [
            ...state.data.slice(0, userIdx),
            ...state.data.slice(userIdx + 1),
          ],
        };
      }
      return state;
    default:
      return state;
  }
}
