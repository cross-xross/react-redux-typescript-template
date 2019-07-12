import { combineReducers, createStore } from 'redux';
import { userInfomationReducer, UserInfoState } from '../reducers/userInformationReducer';

export interface AppState {
  userInfomation: UserInfoState;
}

const store = createStore(
  combineReducers<AppState>({
    userInfomation: userInfomationReducer,
  })
);

export default store;
