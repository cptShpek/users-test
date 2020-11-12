import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../actions';
import UserCard from './UserCard';
import Pagination from './Pagination';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const usersOnPage = users.slice(currentPage * 5 - 5, currentPage * 5);

  return (
    <div className="container-fluid">
      <div className="row">
        {usersOnPage.length > 0 ? (
          usersOnPage.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              surname={user.surname}
              desc={user.desc}
              avatar={user.avatar}
            />
          ))
        ) : (
          <p>Wait for a moment please...</p>
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
