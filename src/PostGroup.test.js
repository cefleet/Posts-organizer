import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import PostGroup from './PostGroup';

let mockPosts = [
    { userId: 1, id: 1, title: "foo", body: "bar" },
    { userId: 1, id: 2, title: "foofoo", body: "barbar" },
    { userId: 2, id: 3, title: "foofoofoo", body: "barbarbar" },
    { userId: 3, id: 4, title: "foofoofoofoo", body: "barbarbarbar" },
    { userId: 4, id: 5, title: "foofoofoofoofoo", body: "barbarbarbarbar" }
];
let currentUser = 1;

describe('Test PostGroup Current User', () => {
    
    let container = shallow(<PostGroup posts={mockPosts} status="current" currentUser={currentUser} />);

    it('launches without crashing', () => {});

    it('only currentUser posts are shown', ()=>{
        expect(container.find('.posts').children()).toHaveLength(mockPosts.filter(p=>p.userId === currentUser).length)
    })
    
});

describe('Test PostGroup All other Users', () => {
    let container = shallow(<PostGroup posts={mockPosts} status="other" currentUser={currentUser} />);

    it('launches without crashing', () => {});

    it('only currentUser posts are shown', ()=>{
        expect(container.find('.posts').children()).toHaveLength(mockPosts.filter(p=>p.userId!== currentUser).length)
    })
    
});