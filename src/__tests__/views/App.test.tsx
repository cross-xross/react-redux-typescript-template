import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../views/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Appコンポーネント', () => {
  it('エラーなく初期表示されること', () => {
    const wrapper = shallow(<App />);
  });
  it('ボタンクリック時にプロパティが呼ばれること', () => {
    const mockChangeName = jest.fn();
    const wrapper = shallow(<App name="sample" changeUserNameAsync={mockChangeName} />);
    wrapper.find('button.second').simulate('click');
    expect(mockChangeName).toBeCalled();
  });
});
