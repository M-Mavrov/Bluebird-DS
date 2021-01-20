import plansReducer from "./plansReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  plans: plansReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
