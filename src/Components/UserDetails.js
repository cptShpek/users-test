import React, { useRef } from 'react';
import { updateUser, addUser } from '../requests/index';

function UserDetails({ history, userId }) {
  const formRef = useRef(null);

  function clickHandler(e) {
    e.preventDefault();
    const updatedUser = {
      name: formRef.current.querySelector('#name').value || 'No Name',
      surname: formRef.current.querySelector('#surname').value || 'No Surname',
      desc: formRef.current.querySelector('#desc').value || 'No description',
      avatar: formRef.current.querySelector('#avatar').value || null,
    };

    if (history.location.pathname === '/add-user') {
      updatedUser.id = Math.floor(Math.random() * 1000000000);
      addUser(updatedUser);
    } else {
      updatedUser.id = userId;
      updateUser(userId, updatedUser);
    }
    history.push('/');
  }

  return (
    <div className="d-flex justify-content-center">
      <form ref={formRef} className="user-details mt-5">
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
        <button type="submit" onClick={clickHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
