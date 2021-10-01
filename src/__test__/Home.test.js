import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/pages/Home';

describe('Home component test', () => {
  it('Should render', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
