import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import Post from './Post';

describe('Test Post', () => {
    let mockPost = { userId: 1, id: 1, title: "foo", body: "bar" };
    let container = shallow(<Post post={mockPost} />);

    it('launches without crashing', () => {});

    it('has correct id', ()=>{
        expect(container.find(".post").prop("id")).toBe(`post_${mockPost.id}`);
    })

    it('has correct title', ()=>{
        expect(container.find(".title").text()).toBe(mockPost.title);
    })

    it('has correct content', ()=>{
        expect(container.find(".body").text()).toBe(mockPost.body);
    })
});
