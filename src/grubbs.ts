import mean from 'ml-array-mean';
import standardDeviation from 'ml-array-standard-deviation';

import raw from './data/grubbs.json';

const { table, alphas } = raw as Table;
/**
 * Grubbs
 * @returns the result of testing an array of values
 */
export function grubbs(values: number[], options: Options = {}) {
  const { alpha = 0.05 } = options;
  const meanValue = mean(values);
  const std = standardDeviation(values);
  const test = [];
  if (values.length < 3) {
    for (const value of values) {
      test.push({
        value,
        score: 0,
        pass: undefined,
      });
    }
    return { criticalValue: undefined, test };
  }
  const criticalValue: number = table[values.length - 3][alphas.indexOf(alpha)];
  for (const value of values) {
    const score = Math.abs(value - meanValue) / std;
    test.push({
      value,
      score,
      pass: score > criticalValue ? false : true,
    });
  }
  return { criticalValue, test };
}

interface Table {
  alphas: [number, number, number, number, number];
  table: [number, number, number, number, number][];
}

interface Options {
  alpha?: number;
}
