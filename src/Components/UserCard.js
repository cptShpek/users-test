import React from "react";
import {Link} from "react-router-dom";
import no_avatar from "../img/no_avatar.png";

function UserCard({id, fullName, desc, avatar}) {
  if (avatar === null) {
    avatar = no_avatar;
  };

  return (
    <div className="col-sm d-flex">
      <div className="card text-white bg-info mb-3 mt-3 flex-fill" style={{width: "18rem"}}>
        <img className="card-img-top" src={avatar} alt={fullName + "'s avatar"} />
        <div className="card-body flex-fill">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text mb-5">{desc}</p>
          <Link to={"/" + id} className="btn btn-light">User Details</Link>
        </div>
      </div>
    </div>
  )
};

export default UserCard;