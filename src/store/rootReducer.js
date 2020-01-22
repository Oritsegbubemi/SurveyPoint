import { combineReducers } from "redux";
import NavbarReducer from "../components/navbar/NavbarReducer";
import LoginReducer from "../views/login/LoginReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

// export const persistedReducer = persistReducer(persistConfig, LoginReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }


const rootReducer = combineReducers({
  sidebar: NavbarReducer,
  user: LoginReducer
});

export default persistReducer(persistConfig, rootReducer);
