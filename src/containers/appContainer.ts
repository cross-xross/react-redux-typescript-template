import { connect } from 'react-redux';
import { changeUserName, changeUserNameAsync } from '../actions/userInformationAction';
import { AppState } from '../store/store';
import App, { AppProperty } from '../views/App';

const mapStateToProps = (state: AppState, props: AppProperty) => {
  return {
    name: state.userInfomation.name,
  };
};

const mapDispatchToProps = (dispatch: any, props: AppProperty) => {
  return {
    changeName: () => {
      dispatch(changeUserName());
    },
    changeUserNameAsync: () => {
      dispatch(changeUserNameAsync('change'));
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
