import {appActionsType} from "../constans";
import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios.get("http://77.120.241.80:8811/api/users")
    .then(res => {
      const pagesCount = Math.ceil(res.data.length / 5);
      dispatch({type: appActionsType.GET_ALL_USERS, users: res.data, pagesCount})
    })
  }
}

export const getCurrentUser = (id) => {
  return (dispatch) => {
    axios.get("http://77.120.241.80:8811/api/user/" + id)
    .then(res => dispatch({type: appActionsType.GET_CURRENT_USER, currentUser: res.data}))
  }
}

export const pagination = (dirrection) => ({
  type: appActionsType.PAGINATION,
  dirrection,
})