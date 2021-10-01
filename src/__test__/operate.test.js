import operate from '../logic/operate';

// action & assert
describe('Operate Module', () => {
  describe('Sum of two numbers', () => {
    test('add integers', () => {
      expect(operate(1, 1, '+')).toBe('2');
    });
    test('add floats', () => {
      expect(operate(1.5, 1.5, '+')).toBe('3');
    });
  });

  describe('substract of two numbers', () => {
    test('substract integers', () => {
      expect(operate(3, 1, '-')).toBe('2');
    });
    test('substract floats', () => {
      expect(operate(4.5, 1.5, '-')).toBe('3');
    });
  });

  describe('divide two numbers', () => {
    test('divide integers', () => {
      expect(operate(8, 4, '÷')).toBe('2');
    });
    test('divide floats', () => {
      expect(operate(4.5, 2, '÷')).toBe('2.25');
    });
    test('divide by 0', () => {
      expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
    });
  });

  describe('multiply two numbers', () => {
    test('multiply integers', () => {
      expect(operate(8, 5, 'x')).toBe('40');
    });
    test('multiply floats', () => {
      expect(operate(4.25, 2, 'x')).toBe('8.5');
    });
  });

  describe('Modulus', () => {
    test('modulus of integers', () => {
      expect(operate(8, 5, '%')).toBe('3');
    });
  });
});
