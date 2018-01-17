import axios from 'axios';
import { SUBMIT_EMAIL } from './types';

export const submitEmail = (values, history) => async dispatch => {
  console.log('send email called:' + values);
  const res = await axios.post('/api/email', values);
  history.push('/result');
  dispatch({ type: SUBMIT_EMAIL, payload: res.data });
};
