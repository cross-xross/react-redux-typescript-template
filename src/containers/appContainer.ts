import { connect } from 'react-redux';
import { fetchAdviceAsync } from '../actions/adviceAction';
import { AppState } from '../store/store';
import App, { AppProperty } from '../views/App';

const mapStateToProps = (state: AppState, props: AppProperty) => {
  return {
    message: state.advice.message,
  };
};

const mapDispatchToProps = (dispatch: any, props: AppProperty) => {
  return {
    fetchAdvice: () => {
      dispatch(fetchAdviceAsync());
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
