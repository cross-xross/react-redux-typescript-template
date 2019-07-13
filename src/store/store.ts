import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userInfomationReducer, UserInfoState } from '../reducers/userInformationReducer';

/**
 * アプリケーション全体のStore定義
 */
export interface AppState {
  userInfomation: UserInfoState;
}

const store = createStore(
  combineReducers<AppState>({
    userInfomation: userInfomationReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
