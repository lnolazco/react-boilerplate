import { GET_ALL } from '../actions/types';

const initialState = {
  data: [],
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
