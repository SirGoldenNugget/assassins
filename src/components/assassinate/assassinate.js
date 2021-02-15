
import React from "react";
import axios from "axios";

export default function Assassinate(props) {
    function onAssassinate(e) {
        e.preventDefault();

        axios.get("/api/assassinate", { withCredentials: true })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            <br />
            {
                props.target.isPending ?
                    <p>Pending</p> :
                    <form onSubmit={onAssassinate}>
                        <div className="form-group">
                            <input type="submit" value="Assassinate" className="btn btn-primary" />
                        </div>
                    </form>
            }
        </React.Fragment>
    );
}