import {applyMiddleware, createStore} from "redux";
import airlineApp from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";



const store = createStore(airlineApp, composeWithDevTools(applyMiddleware(thunk)))

export default store;
