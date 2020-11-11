import React from "react";
import {connect} from "react-redux";
import {updateUser, addUser} from "../requests/index";

function UserDetails(props) {
    function clickHandler(e) {
        e.preventDefault()

        const updatedUser = {
            name: document.getElementById('name').value || "No Name",
            surname: document.getElementById('surname').value  || "No Surname",
            desc: document.getElementById('desc').value || "No description",
            avatar: document.getElementById('avatar').value  || null,
        }

        if (props.history.location.pathname === "/add-user") {
            updatedUser.id = Math.floor(Math.random() * 1000000000);
            addUser( updatedUser)
        } else {
            updatedUser.id = props.userId;
            updateUser(props.userId, updatedUser)
        }
        props.history.push("/")
    }

    return (
        <div className="col-sm d-flex justify-content-center">
            <form className="mt-5">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">New Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">New Surname</label>
                    <input type="text" className="form-control" id="surname" placeholder="Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">New Description</label>
                    <textarea rows="3" className="form-control" id="desc" />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="formGroupExampleInput2">New Avatar</label>
                    <input type="url" className="form-control" id="avatar" placeholder="http://new-avatar.com" />
                </div>
                <button type="submit" onClick={clickHandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default UserDetails