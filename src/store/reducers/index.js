import { combineReducers } from "redux";
import trendingReducer from "./reducerTrending";

const rootReducer = combineReducers({
    trending: trendingReducer,
});

export default rootReducer;