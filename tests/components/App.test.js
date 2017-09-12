import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../app/components/App';

const props = {
  users: [],
  getAll: () => {},
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AppContainer {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});