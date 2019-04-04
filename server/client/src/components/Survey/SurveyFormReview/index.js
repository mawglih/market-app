import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from '../../../utils/formFields';
import { submitSurvey } from '../../../actions';

const SurveyFormReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history,
}) => {
  const reviewFields = [...formFields].map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h4>Please review your submission</h4>
      {reviewFields}
      <button
        className="darken-3 btn-flat yellow white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(
  mapStateToProps,
  { submitSurvey }
  )(withRouter(SurveyFormReview));
