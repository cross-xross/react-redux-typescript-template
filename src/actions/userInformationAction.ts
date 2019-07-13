import { Action, Dispatch } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { AppState } from '../store/store';

const actionCreator = actionCreatorFactory();

export const changeUserName = actionCreator('CHANGE_USER_NAME');

/**
 * 非同期処理
 * @param name
 */
export const changeUserNameAsync = (name: string) => {
  return (dispatch: Dispatch<Action>, getState: () => AppState) => {
    dispatch(changeUserName());
  };
};
