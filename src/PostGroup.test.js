import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";

import configureStore from 'redux-mock-store';

import { Provider } from "react-redux";

const initialState = { data: [
    { userId: 1, id: 1, title: "foo", body: "bar" },
    { userId: 1, id: 2, title: "foofoo", body: "barbar" },
    { userId: 2, id: 3, title: "foofoofoo", body: "barbarbar" },
    { userId: 3, id: 4, title: "foofoofoofoo", body: "barbarbarbar" },
    { userId: 4, id: 5, title: "foofoofoofoofoo", body: "barbarbarbarbar" }
]}

const mockStore = configureStore();
let store, wrapper;

import PostGroup from './PostGroup';

let currentUser = 1;
store = mockStore(initialState);

describe('Test PostGroup Current User', () => {
    let container = shallow(<Provider store={store} ><PostGroup status="current" currentUser={currentUser} /></Provider>);

    it('launches without crashing', () => {});

    it('only currentUser posts are shown', ()=>{
        expect(container.find('.posts').children()).toHaveLength(initialState.data.filter(p=>p.userId === currentUser).length)
    })
    
});

describe('Test PostGroup All other Users', () => {
    let container = shallow(<Provider store={store} ><PostGroup status="other" currentUser={currentUser} /></Provider>);

    it('launches without crashing', () => {});

    it('only currentUser posts are shown', ()=>{
        expect(container.find('.posts').children()).toHaveLength(initialState.data.filter(p=>p.userId!== currentUser).length)
    })
    
});