import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {pagination} from "../store/actions/actions";
import {deleteUser} from "../requests/index";
import no_avatar from "../img/no_avatar.png";

function UserCard(props) {
  var {id, name, surname, desc, avatar} = props;
  if (props.avatar === null) {
    avatar = no_avatar;
  } else {
    avatar = props.avatar
  }

  function handleDelete(id) {
    deleteUser(id);
    props.pagination(-100);
  }


  return (
    <div className="col-sm d-flex">
      <div className="card text-white bg-info mb-3 mt-3" style={{width: "18rem"}}>
        <img className="card-img-top" src={avatar} alt={name + "'s avatar"} />
        <div className="card-body">
          <h5 className="card-title">{name + " " + surname}</h5>
          <p className="card-text mb-5">{desc}</p>
          <div className="row btns-row">
            <Link to={"/" + id} className="btn btn-light col">Update User</Link>
            <button onClick={() => handleDelete(id)} className="btn btn-warning col">Delete User</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return{
    pagination: (dirrection) => dispatch(pagination(dirrection)),
  };
};

export default connect(null, mapDispatchToProps)(UserCard)