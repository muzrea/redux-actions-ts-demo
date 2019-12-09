import { render } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';

import 'src/setupTest';
import Index from '../';

describe('Todo <Index />', () => {
  it('should render correctly', () => {
    const wrapper = render(<MemoryRouter><Index match={{ path: 'path' }} /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
