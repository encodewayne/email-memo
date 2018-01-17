import { SUBMIT_EMAIL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SUBMIT_EMAIL:
      return action.payload;
    default:
      return state;
  }
}
