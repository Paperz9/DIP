import { assert } from 'chai';
import { subtract } from '../logic.mjs';

describe('When subtracting numbers', () => {
  it('Should return correct result', () => {
    const result = subtract(3, 2);
    assert.equal(result, 1);
  });
});
