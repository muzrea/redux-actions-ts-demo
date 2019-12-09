import { configure, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

React.useLayoutEffect = React.useEffect;

configure({ adapter: new Adapter() });

export const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

export const updateField = (wrapper: ReactWrapper<any>, name: string, value: any) => {
  wrapper.simulate('change', {
    persist: () => ({}),
    target: {
      name,
      value,
    },
  });
};
