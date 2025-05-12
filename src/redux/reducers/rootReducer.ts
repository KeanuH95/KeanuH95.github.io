import { combineReducers } from "@reduxjs/toolkit";
import siteInfo from "../slices/siteInfoSlice";
import { AnyAction, Reducer } from "redux";

const appReducer = combineReducers({
  siteInfo
});

const rootReducer: Reducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
    return appReducer(state, action);
}

export default rootReducer;
