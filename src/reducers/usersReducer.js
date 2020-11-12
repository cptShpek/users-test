import { appActionsType } from '../constans';

const initialState = {
  users: [],
  currentPage: 0,
  pagesCount: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_USERS:
      return {
        ...state,
        currentPage: 1,
        users: action.users,
        pagesCount: action.pagesCount,
      };

    case appActionsType.PAGINATION: {
      let goToPage = state.currentPage + action.dirrection;
      if (goToPage < 1) {
        goToPage = 1;
      }
      if (goToPage > state.pagesCount) {
        goToPage = state.pagesCount;
      }
      return {
        ...state,
        currentPage: goToPage,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
