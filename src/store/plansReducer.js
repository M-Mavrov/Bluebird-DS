import * as actionTypes from "./ActionTypes";
const initialState = {
  plans: {
    name: "",
    active: true,
  },
};

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLAN:
      return {
        ...state,
        plans: {
          ...state.plans,
          name: action.payload.name,
          active: action.payload.value,
        },
      };
    default:
      return state;
  }
};
export default plansReducer;
