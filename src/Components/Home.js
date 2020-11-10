import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllUsers} from "../store/actions/actions";
import UserCard from "./UserCard";
import ReactPaginate from 'react-paginate';

class Home extends Component {
  constructor(props) {
    super(props)
  };

  componentWillMount() {
    this.props.getAllUsers()
  }

  render() {
    const users = this.props.users || [];
    return(
      <div className="container-fluid">
          <div className="row">
            {users.length > 0 ? users.map(user => {
              return (
                <UserCard 
                  id={user.id} 
                  fullName={user.name + " " + user.surname}
                  desc={user.desc}
                  avatar={user.avatar}
                />
              )})
              :
              <p>Wait for a moment please...</p>}
        </div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={console.log('asdas')}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) =>{
  return {
      users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      getAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)