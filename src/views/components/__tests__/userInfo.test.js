import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import UserInfo from '../UserInfo';

const props = {
    firstName: 'peng',
    lastName: 'lunjiao',
    gender: 'male',
}

it('render UserInfo', () => {
    const wrapper = shallow(<UserInfo {...props} />);
});

