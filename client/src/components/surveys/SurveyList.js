import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  onSurveyDelete(surveyId) {
    this.props.deleteSurvey(surveyId);
  }

  renderSurveys() {
    console.log(this.props.sortNew);
    let surveys;
    if (this.props.sortNew) {
      surveys = this.props.surveys;
    }
    surveys = this.props.surveys.reverse();

    return surveys.map(survey => {
      return (
        <div className="card blue-grey darken-1 white-text" key={survey._id}>
          <div className="card-content">
            <span className="card-title" />
            <p>{survey.title}</p>
            <p className="right">
              Sent On {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <button
              className="right waves-effect waves-light btn"
              onClick={() => this.onSurveyDelete(survey._id)}
            >
              Delete Survey
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(
  mapStateToProps,
  { fetchSurveys, deleteSurvey }
)(SurveyList);
