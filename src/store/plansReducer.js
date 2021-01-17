import * as actionTypes from "./ActionTypes";
const initialState = {
  plans: {
    name: "",
    active: true,
  },
  product: {
    name: "",
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
    case actionTypes.RESET_PLANS:
      return initialState;
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        plans: {
          ...state.plans,
        },
        product: { ...state.product, name: action.payload.name },
      };

    default:
      return state;
  }
};
export default plansReducer;
