import * as actionTypes from "./ActionTypes";
export const addPlan = (payload) => {
  return {
    type: actionTypes.ADD_PLAN,
    payload,
  };
};
