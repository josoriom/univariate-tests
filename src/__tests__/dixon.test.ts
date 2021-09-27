import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { dixon } from '../dixon';

expect.extend({ toBeDeepCloseTo });

describe('test dixon function 10 values', () => {
  const testValues = [
    20.45, 10.26, 10.49, 10.36, 10.53, 10.77, 10.4, 10.4, 5.56, 10.88,
  ];
  const { test, criticalValue } = dixon(testValues);

  it('Test 1 outlier', () => {
    expect(criticalValue).toStrictEqual(0.466);
    expect(test[0].score).toBeDeepCloseTo(0.31564808, 8);
    expect(test[0].pass).toStrictEqual(true);
    expect(test[1].score).toBeDeepCloseTo(0.00940228, 8);
    expect(test[1].pass).toStrictEqual(true);
    expect(test[2].score).toBeDeepCloseTo(0.00671591, 8);
    expect(test[2].pass).toStrictEqual(true);
    expect(test[3].score).toBeDeepCloseTo(0.00268636, 8);
    expect(test[3].pass).toStrictEqual(true);
    expect(test[4].score).toBeDeepCloseTo(0.00268636, 8);
    expect(test[4].pass).toStrictEqual(true);
    expect(test[5].score).toBeDeepCloseTo(0.00604432, 8);
    expect(test[5].pass).toStrictEqual(true);
    expect(test[6].score).toBeDeepCloseTo(0.00268636, 8);
    expect(test[6].pass).toStrictEqual(true);
    expect(test[7].score).toBeDeepCloseTo(0.0161182, 8);
    expect(test[7].pass).toStrictEqual(true);
    expect(test[8].score).toBeDeepCloseTo(0.0073875, 8);
    expect(test[8].pass).toStrictEqual(true);
    expect(test[9].score).toBeDeepCloseTo(0.64271323, 8);
    expect(test[9].pass).toStrictEqual(false);
  });
});

describe('test dixon function 8 values', () => {
  const testValues = [
    2.699, 2.3979, 2.0969, 10.7959, 1.4949, 1.1937, 0.8927, 5.4911,
  ];
  const { test, criticalValue } = dixon(testValues);

  it('Test 2 outlier', () => {
    expect(criticalValue).toStrictEqual(0.526);
    expect(test[0].score).toBeDeepCloseTo(0.03039421, 8);
    expect(test[0].pass).toStrictEqual(true);
    expect(test[1].score).toBeDeepCloseTo(0.03039421, 8);
    expect(test[1].pass).toStrictEqual(true);
    expect(test[2].score).toBeDeepCloseTo(0.03041441, 8);
    expect(test[2].pass).toStrictEqual(true);
    expect(test[3].score).toBeDeepCloseTo(0.06078843, 8);
    expect(test[3].pass).toStrictEqual(true);
    expect(test[4].score).toBeDeepCloseTo(0.03039421, 8);
    expect(test[4].pass).toStrictEqual(true);
    expect(test[5].score).toBeDeepCloseTo(0.03040431, 8);
    expect(test[5].pass).toStrictEqual(true);
    expect(test[6].score).toBeDeepCloseTo(0.28193917, 8);
    expect(test[6].pass).toStrictEqual(true);
    expect(test[7].score).toBeDeepCloseTo(0.53566523, 8);
    expect(test[7].pass).toStrictEqual(false);
  });
});

describe('test dixon for less than 3 values', () => {
  const testValues = [2.699, 2.3979];
  const { test, criticalValue } = dixon(testValues);
  it('Test 2 values', () => {
    expect(criticalValue).toBeUndefined();
    expect(test).toStrictEqual([
      { pass: undefined, score: 0, value: 2.699 },
      { pass: undefined, score: 0, value: 2.3979 },
    ]);
  });
});
