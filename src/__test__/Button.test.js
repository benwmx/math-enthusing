import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Calculator Component test', () => {
  it('Should render ', () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
