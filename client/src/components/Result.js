import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Result extends Component {
  helper() {
    //console.log(this.props.message);
    if (this.props.message && this.props.message.success === true)
      return (
        <div className="alert alert-info center-align" role="alert">
          Well done! You are a cat now!
        </div>
      );
    else
      return (
        <div className="alert alert-info center-align" role="alert">
          {'Oops! Something wrong happens...'}
        </div>
      );
  }
  render() {
    return (
      <div className="">
        <div id="form" className="">
          {this.helper()}
          <Link
            to="/"
            className="light-blue darken-4 btn-flat white-text right"
          >
            Back <i className="material-icons right">arrow_back</i>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    message: state.message
  };
}
export default connect(mapStateToProps)(Result);
