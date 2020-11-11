import React from 'react';
import BasePage from './BasePage';
import UserDetails from '../Components/UserDetails';

const UserDetailsPage = function (props) {
  return (
    <BasePage>
      <UserDetails history={props.history} userId={props.match.params.id} />
    </BasePage>
  );
};

export default UserDetailsPage;
