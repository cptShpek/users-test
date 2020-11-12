import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../requests/index';
import noAvatar from '../img/noAvatar.png';

function UserCard({ id, name, surname, desc, avatar }) {
  if (avatar === null) {
    avatar = noAvatar;
  }

  function handleDelete(userID) {
    deleteUser(userID);
    window.location.reload();
  }

  return (
    <div className="d-flex m-2">
      <div className="card text-white bg-info mb-3 mt-3" style={{ width: '18rem' }}>
        <img className="card-img-top" src={avatar} alt={`${name}'s avatar`} />
        <div className="card-body">
          <h5 className="card-title">{`${name} ${surname}`}</h5>
          <p className="card-text mb-5">{desc}</p>
          <div className="btns-row">
            <Link to={`/${id}`} className="btn btn-light">
              Update User
            </Link>
            <button type="button" onClick={() => handleDelete(id)} className="btn btn-warning">
              Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
