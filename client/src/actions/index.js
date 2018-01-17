import axios from 'axios';
import { SUBMIT_EMAIL } from './types';

export const submitEmail = (values, history) => async dispatch => {
  console.log('send email called:' + values);
  history.push('/result');
  const res = await axios.post('/api/email', values);
  dispatch({ type: SUBMIT_EMAIL, payload: res.data });
};
