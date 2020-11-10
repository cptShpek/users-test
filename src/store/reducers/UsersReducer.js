import {appActionsType} from "../constans";

const usersReducer = (state = {}, action) => {
  switch(action.type){
      case appActionsType.ADD_NEW_USER:
        return {
          ...state,
          users: action.users
        }
      
      default:
        return state
  }
};

export default usersReducer;