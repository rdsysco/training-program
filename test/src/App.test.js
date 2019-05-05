import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

describe('app file describer', () => {

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  it('111', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
  });

  it('adds a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual(['123', '123']);
  });

  it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.find('.gift-list').children().length).toEqual(3);
  });

  it('initializes a person in `state`', () => {
    expect(app.state().person).toEqual('');
  });
});