import * as actionTypes from "./ActionTypes";

export const resetPlans = () => {
  return {
    type: actionTypes.RESET_PLANS,
  };
};
export const addPlan = (payload) => {
  return {
    type: actionTypes.ADD_PLAN,
    payload,
  };
};
export const addProduct = (payload) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload,
  };
};
