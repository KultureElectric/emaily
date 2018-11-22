import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
  state = { sortNew: true };

  render() {
    return (
      <div className="Dashboard">
        <div className="Sort-dropdown">
          <btn
            style={{ margin: "5px" }}
            className="btn"
            onClick={() => {
              this.state.sortNew
                ? this.setState({ sortNew: false })
                : this.setState({ sortNew: true });
            }}
          >
            {this.state.sortNew ? "Sort Old" : "Sort New"}
          </btn>
        </div>
        <SurveyList sortNew={this.state.sortNew} />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
