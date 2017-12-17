import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
    Row,
    col
} from "reactstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

class AppRequirements extends Component {
    render() {
        return (
            <div className="container body-container">
                <div className="form-title">
                    <h1>Operational Requirements</h1>
                </div>
                <div className="form-group row">
                    <label for="tail" className="label-blue col-12">
                        Maximum Tail Latency
                    </label>
                    <div className="col-5">
                        <input
                            className="form-control"
                            name="tail"
                            placeholder=" "
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="error-rate" className="label-blue col-12">
                        Maximum Error Rate
                    </label>
                    <div className="col-5">
                        <input
                            className="form-control"
                            name="errorRate"
                            placeholder=" "
                        />
                    </div>
                </div>
                <div className="action-footer">
                    <Link className="btn btn-main" to="/step/2">
                        Next
                    </Link>
                </div>
            </div>
        );
    }
}

export default AppRequirements;
