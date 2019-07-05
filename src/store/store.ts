import { createStore, combineReducers } from 'redux';
import { UserInfoState, userInfomationReducer } from '../reducers/userInformationReducer';

export type AppState = {
    userInfomation: UserInfoState
}

const store = createStore(
  combineReducers<AppState>({
    userInfomation: userInfomationReducer
  })
);

export default store;