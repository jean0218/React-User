import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Header from '../Header';

test('Componet Header has click event', () => {
    let header = shallow(<Header />);
    header.find('button').simulate('click');
});
