import {appActionsType} from "../constans";

const usersReducer = (state = {currentPage: 1}, action) => {
  switch(action.type){
      case appActionsType.GET_ALL_USERS:
        return {
          ...state,
          users: action.users,
          pagesCount: action.pagesCount
        }
      
      case appActionsType.PAGINATION: {
        var goToPage = state.currentPage + action.dirrection
        if (goToPage < 1) {
          goToPage = 1
        } 
        if (goToPage > state.pagesCount) {
          goToPage = state.pagesCount;
        } 
        return {
          ...state,
          currentPage: goToPage
        }
      }

      default:
        return state
  }
};

export default usersReducer;