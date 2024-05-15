import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { grubbs } from '../grubbs';

expect.extend({ toBeDeepCloseTo });

const precision = 7;

describe('test grubbs function 10 values', () => {
  const testValues = [
    10.45, 10.26, 10.49, 10.36, 10.53, 10.77, 10.4, 10.4, 5.56, 10.88,
  ];

  const { test, criticalValue } = grubbs(testValues);

  it('Test 1 outlier', () => {
    expect(criticalValue).toBe(2.18);
    expect(test[0].score).toBeDeepCloseTo(0.27939652, precision);
    expect(test[0].pass).toBe(true);
    expect(test[1].score).toBeDeepCloseTo(0.15874802, precision);
    expect(test[1].pass).toBe(true);
    expect(test[2].score).toBeDeepCloseTo(0.3047962, precision);
    expect(test[2].pass).toBe(true);
    expect(test[3].score).toBeDeepCloseTo(0.22224723, precision);
    expect(test[3].pass).toBe(true);
    expect(test[4].score).toBeDeepCloseTo(0.33019589, precision);
    expect(test[4].pass).toBe(true);
    expect(test[5].score).toBeDeepCloseTo(0.48259399, precision);
    expect(test[5].pass).toBe(true);
    expect(test[6].score).toBeDeepCloseTo(0.24764691, precision);
    expect(test[6].pass).toBe(true);
    expect(test[7].score).toBeDeepCloseTo(0.24764691, precision);
    expect(test[7].pass).toBe(true);
    expect(test[8].score).toBeDeepCloseTo(2.82571484, precision);
    expect(test[8].pass).toBe(false);
    expect(test[9].score).toBeDeepCloseTo(0.55244312, precision);
    expect(test[9].pass).toBe(true);
  });
});

describe('test grubbs function 8 values', () => {
  const testValues = [
    2.699, 2.3979, 2.0969, 10.7959, 1.4949, 1.1937, 0.8927, 5.4911,
  ];

  const { test, criticalValue } = grubbs(testValues);

  it('Test 2 outlier', () => {
    expect(criticalValue).toBe(2.03);
    expect(test[0].score).toBeDeepCloseTo(0.20609918, precision);
    expect(test[0].pass).toBe(true);
    expect(test[1].score).toBeDeepCloseTo(0.29685652, precision);
    expect(test[1].pass).toBe(true);
    expect(test[2].score).toBeDeepCloseTo(0.38758372, precision);
    expect(test[2].pass).toBe(true);
    expect(test[3].score).toBeDeepCloseTo(2.23446244, precision);
    expect(test[3].pass).toBe(false);
    expect(test[4].score).toBeDeepCloseTo(0.56903812, precision);
    expect(test[4].pass).toBe(true);
    expect(test[5].score).toBeDeepCloseTo(0.6598256, precision);
    expect(test[5].pass).toBe(true);
    expect(test[6].score).toBeDeepCloseTo(0.7505528, precision);
    expect(test[6].pass).toBe(true);
    expect(test[7].score).toBeDeepCloseTo(0.63549353, precision);
    expect(test[7].pass).toBe(true);
  });
});

describe('test grubbs for less than 3 values', () => {
  const testValues = [2.699, 2.3979];
  const { test, criticalValue } = grubbs(testValues);
  it('Test 2 values', () => {
    expect(criticalValue).toBeUndefined();
    expect(test).toStrictEqual([
      { pass: undefined, score: 0, value: 2.699 },
      { pass: undefined, score: 0, value: 2.3979 },
    ]);
  });
});
