import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { userInfomationActions } from '../actions/userInformationAction';


export interface UserInfoState {
    name: string
}

const initialState: UserInfoState = {
    name: "sample",
};


export const userInfomationReducer = reducerWithInitialState(initialState)
    .case(userInfomationActions.changeUserName, (state, name) => {
        console.log("***");
        return {
            ...state,
            name: "changed"
        };
    })