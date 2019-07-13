import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeUserName } from '../actions/userInformationAction';

export interface UserInfoState {
  name: string;
}

const initialState: UserInfoState = {
  name: 'sample',
};

export const userInfomationReducer = reducerWithInitialState(initialState).case(
  changeUserName,
  (state, name) => {
    return {
      ...state,
      name: 'changed',
    };
  }
);
