'use strict';
const expect = require('chai').expect;
const add = require('../dist/index').add;
const getType = require('../dist/getType').getType;

describe('ts-hi function test', () => {
  it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });

  it('getType', () => {
    const result = getType([], 'array');
    expect(result).to.equal(true);
  });

  it('getType eror', () => {
    const result = getType([], true);
    expect(result).to.equal('type must be a string');
  });
});
