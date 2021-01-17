import * as actionTypes from "./ActionTypes";
const initialState = { user: "" };
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATCH_ERROR:
      console.log("ERROR:", action.error);
      return state;

    default:
      return state;
  }
};

export default authReducer;
