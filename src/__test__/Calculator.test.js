/* eslint-disable prefer-destructuring */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Calculator Component test', () => {
  it('Should render ', () => {
    const calculator = renderer.create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });

  describe('Should the result appear when the buttons are clicked', () => {
    let result = null;
    let button = null;
    it('test the button 1', () => {
      render(<Calculator />);
      button = screen.getByText(/1/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('1');
    });
    it('test the button 2', () => {
      render(<Calculator />);
      button = screen.getByText(/2/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('2');
    });
    it('test the button 3', () => {
      render(<Calculator />);
      button = screen.getByText(/3/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('3');
    });
    it('test the button 4', () => {
      render(<Calculator />);
      button = screen.getByText(/4/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('4');
    });
    it('test the button 5', () => {
      render(<Calculator />);
      button = screen.getByText(/5/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('5');
    });
    it('test the button 6', () => {
      render(<Calculator />);
      button = screen.getByText(/6/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('6');
    });
    it('test the button 7', () => {
      render(<Calculator />);
      button = screen.getByText(/7/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('7');
    });
    it('test the button 8', () => {
      render(<Calculator />);
      button = screen.getByText(/8/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('8');
    });
    it('test the button 9', () => {
      render(<Calculator />);
      button = screen.getByText(/9/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('9');
    });
    it('test the button 0', () => {
      render(<Calculator />);
      button = screen.queryAllByText(/0/i)[1];
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      expect(result.textContent).toBe('0');
    });
    it('test the button AC', () => {
      render(<Calculator />);
      button = screen.getByText(/2/i);
      result = screen.queryAllByText(/0/i)[0];
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
      expect(result.textContent).toBe('222');
      button = screen.getByText(/AC/i);
      userEvent.click(button);
      expect(result.textContent).toBe('0');
    });
  });
});
