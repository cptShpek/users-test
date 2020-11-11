import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllUsers} from "../store/actions/actions";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

class Home extends Component {

  componentDidMount() {
    this.props.getAllUsers()
  }

  render() {
    const users = this.props.users || [];
    const {currentPage} = this.props
    return(
      <div className="container-fluid">
          <div className="row">
            {users.length > 0 ? users.map((user, index) => {
                if (currentPage === 1) {
                  if (index < 5) {
                    return (
                      <UserCard 
                        key = {user.id}
                        id={user.id}
                        name={user.name}
                        surname={user.surname}
                        desc={user.desc}
                        avatar={user.avatar}
                      />
                    )
                  }
                } else if (index <= currentPage * 4 + 1 && index > currentPage * 4 - 4) {
                  return (
                    <UserCard 
                      key = {user.id}
                      id={user.id} 
                      name={user.name}
                      surname={user.surname}
                      desc={user.desc}
                      avatar={user.avatar}
                    />
                  )
                }
              })
              :
              <p>Wait for a moment please...</p>}
        </div>
        <Pagination />
      </div>
    )
  }
};

const mapStateToProps = (state) =>{
  const {pagesCount, users, currentPage} = state
  return {
      users,
      pagesCount,
      currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      getAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)