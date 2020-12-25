import React, { Component } from "react";
import { UserContext } from "../../contexts/user.context";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Party extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.onLeaveParty = this.onLeaveParty.bind(this);
        this.onStartParty = this.onStartParty.bind(this);

        this.state = {};
    }

    onStartParty(e) {
        e.preventDefault();
    }

    onLeaveParty(e) {
        e.preventDefault();

        axios.get("/api/leave", { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.context.setPartyCode("");
                    this.context.setIsAdmin(false);
                    this.setState({ redirectTo: "/" });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.redirectTo) return <Redirect to={{ pathname: this.state.redirectTo }} />;
        return (
            <div className="text-center">
                <h4>Party Code: <b>{this.context.partyCode}</b></h4>
                <label className="col-sm-2 col-form-label">Target</label>
                {
                    this.context.isAdmin &&
                    <form onSubmit={this.onStartParty}>
                        <div className="form-group">
                            <input type="submit" value="Start Party" className="btn btn-primary" />
                        </div>
                    </form>
                }
                <form onSubmit={this.onLeaveParty}>
                    <div className="form-group">
                        <input type="submit" value="Leave Party" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}