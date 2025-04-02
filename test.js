// Pair programming
// Alima Ayikoru
// Ayebazibwe Ishmael

import { assert } from 'chai';
import { describe, it } from 'mocha';
// eslint-disable-next-line import/extensions
import fibonacci from './fibonacci.js';

describe('fibonacci', () => {
  it('Should return 0 for fibonacci(0)', () => {
    assert.strictEqual(fibonacci(0), 0);
  });

  it('Should return 1 for fibonacci(1)', () => {
    assert.strictEqual(fibonacci(1), 1);
  });

  it('Should return 1 for fibonacci(2)', () => {
    assert.strictEqual(fibonacci(2), 1);
  });

  it('Should throw a type error for string input', () => {
    assert.throws(
      () => fibonacci('dsd'),
      TypeError,
      'Input must be a number',
    );
  });

  it('Should throw a value error for negative input', () => {
    assert.throws(
      () => fibonacci(-4),
      Error,
      'Input must be a 0 or a positive number',
    );
  });

  it('Should throw an error for floating point', () => {
    assert.throws(
      () => fibonacci(47.9),
      Error,
      'Input should be a positive interger',
    );
  });
});
