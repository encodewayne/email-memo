import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import resultReducer from './reducer_result';

export default combineReducers({
  form: reduxForm,
  message: resultReducer
});
