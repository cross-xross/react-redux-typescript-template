import React, { ErrorInfo } from 'react';
import './App.css';

export interface AppProperty {
  message?: string;
  fetchAdvice?: () => void;
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
        <h3>今日のアドバイス</h3>
        <h3>「{this.props.message}」</h3>
        <button className="adviceButton" onClick={this.props.fetchAdvice}>
          アドバイスを請う
        </button>
        <div>{this.state.count}</div>
        <button onClick={this.onClickButton}>COUNT UP</button>
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
