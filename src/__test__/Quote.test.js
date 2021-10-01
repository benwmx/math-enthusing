import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/pages/Quote';

describe('Quote component test', () => {
  it('Should render', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
