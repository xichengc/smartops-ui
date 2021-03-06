import React, { Component } from "react";
import Navbar from "../containers/Navbar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// modules
import { list_apps } from "../modules/client";

// components
import AppCoverCreate from "../containers/AppCoverCreate";
import AppCover from "../containers/AppCover";

class Home extends Component {
  componentWillMount() {
    this.props.list_apps();
  }

  render() {
    let appCovers = this.props.apps.map((app, index) => (
      <AppCover {...app} key={index} />
    ));

    console.log("apps: ", this.props.apps);

    return (
      <div>
        <Navbar />
        <div className="container-bg">
          <div className="container app-cover-container">
            <div className="row">
              <AppCoverCreate />
              {appCovers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apps: state.client.apps
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ list_apps }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
