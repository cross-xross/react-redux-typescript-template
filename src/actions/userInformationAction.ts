import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const userInfomationActions = {
  changeUserName: actionCreator('CHANGE_USER_NAME'),
};
