import { combineReducers } from "@reduxjs/toolkit";
import siteInfo from "../slices/siteInfoSlice";

const appReducer = combineReducers({
  siteInfo
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
