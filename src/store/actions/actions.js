import {appActionsType} from "../constans";
import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios.get("http://77.120.241.80:8811/api/users")
    .then(res => {
      dispatch({type: appActionsType.ADD_NEW_USER, users: res.data})
    })
  }
}