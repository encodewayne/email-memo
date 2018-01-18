// EmailForm shows a form for a user to add input

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import EmailField from './EmailField';
import _ from 'lodash';
import validateEmails from '../utils/validateEmails';
import formFields from './formFields';
import * as actions from '../actions';
import { connect } from 'react-redux';

class EmailForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type="text"
          name={name}
          component={EmailField}
        />
      );
    });
  }

  onSubmit(values) {
    console.log('onSubmit called');
    this.props.submitEmail(values, this.props.history);
  }

  render() {
    //console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div id="form" className="col s6 offset-s3">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            {this.renderFields()}
            <button
              type="submit"
              className="light-blue darken-4 btn-flat right white-text"
            >
              Submit<i className="material-icons right"> done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name] || (values[name] && values[name].trim() === ''))
      errors[name] = 'You must provide a ' + name;
  });

  if (!errors.recipients)
    errors.recipients = validateEmails(values.recipients || '');
  return errors;
}

EmailForm = connect(null, actions)(EmailForm);

export default reduxForm({
  validate,
  form: 'emailForm'
})(EmailForm);
