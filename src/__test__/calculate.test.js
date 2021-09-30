import calculate from '../logic/calculate';

let obj = [];
let result = []; 
describe('Testing the Calculate Function', () => {
  test('Test AC Button', () => {
    obj = calculate(obj, 'AC');
    result= {
      total: null,
      next: null,
      operation: null,
    };
    expect(obj).toBe(result);
  });
  test('Test Buttons 1 0 + 5 = ', () => {
    obj = calculate(obj, '1');
    obj = calculate(obj, '0');
    obj = calculate(obj, '+');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    result= {
      total: '15',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons x 2 =', () => {
    obj = calculate(obj, 'x');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    result= {
      total: '30',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons ÷ 3 =', () => {
    obj = calculate(obj, '÷');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    result= {
      total: '10',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons % 4 =', () => {
    obj = calculate(obj, '%');
    obj = calculate(obj, '4'); 
    obj = calculate(obj, '=');
    result= {
      total: '2',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons - 6 =', () => {
    obj = calculate(obj, '-');
    obj = calculate(obj, '6'); 
    obj = calculate(obj, '=');
    result= {
      total: '-4',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons +/- + 7 8 = ', () => {
    obj = calculate(obj, '+/-');
    obj = calculate(obj, '+');
    obj = calculate(obj, '7'); 
    obj = calculate(obj, '8');
    obj = calculate(obj, '=');
    result= {
      total: '82',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
  test('Test Buttons + . 9 =', () => {
    obj = calculate(obj, '+');
    obj = calculate(obj, '.');
    obj = calculate(obj, '9');
    obj = calculate(obj, '=');
    result= {
      total: '82.9',
      next: null,
      operation: null,
    };
    expect(obj.total).toBe(result.total);
  });
});
