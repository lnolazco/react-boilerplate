import React from 'react';
import { shallow } from 'enzyme';

import List from '../../../app/components/List';

const props = {
  children: [<div key="1">user</div>],
};

describe('List Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a list', () => {
    expect(wrapper.find('.list').length);
  });
});
