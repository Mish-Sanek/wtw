import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { filmsReducer } from "./filmsReducer";
import { showMoreFilmsReducer } from "./showMoreFilmsReducer";
import { moviePageTabsReducer } from "./moviePageTabsReducer";
import { activeGenreReducer } from "./activeGenreReducer";

const rootReducer = combineReducers({
  user: userReducer,
  films: filmsReducer,
  showedFilmsCount: showMoreFilmsReducer,
  moviePageActiveTab: moviePageTabsReducer,
  activeGenre: activeGenreReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
