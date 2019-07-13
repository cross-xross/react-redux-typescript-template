import React, { ErrorInfo } from 'react';
import './App.css';

export interface AppProperty {
  name?: string;
  changeName?: () => void;
  changeUserNameAsync?: () => void;
}

interface AppState {
  count: number;
}

export default class App extends React.Component<AppProperty, AppState> {
  constructor(props: AppProperty) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public render() {
    return (
      <div className="App">
        <h3>{this.props.name}</h3>
        <span>{this.state.count}</span>
        <button onClick={this.onClickButton}>PUSH</button>
        <br />
        <button className="second" onClick={this.props.changeUserNameAsync}>
          change
        </button>
      </div>
    );
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    //
  }

  private onClickButton = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
}
