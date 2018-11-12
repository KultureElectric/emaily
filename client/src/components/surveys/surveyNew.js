import React from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./surveyForm";
import SurveyReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyReview onCancel={() => this.setState({ showReview: false })} />
      );
    } else {
      return (
        <SurveyForm
          onSurveySubmit={() => this.setState({ showReview: true })}
        />
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
