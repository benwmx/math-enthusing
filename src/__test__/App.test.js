import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App Component test', () => {
  it('Should render', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
