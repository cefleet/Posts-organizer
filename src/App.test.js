import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { mount } from "enzyme";

import configureStore from 'redux-mock-store';

import App from './App';
import { Provider } from "react-redux";

const initialState = { data: [] }
const mockStore = configureStore();
let store, wrapper;

describe('Test App', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><App /></Provider>);
  });

  it('renders without crashing', () => {});
});