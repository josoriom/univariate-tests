import mean from 'ml-array-mean';
import standardDeviation from 'ml-array-standard-deviation';

import raw from './data/grubbs.json';

const { table, alphas } = raw as Table;
/**
 * My module
 * @returns A very important number
 */
export function grubbs(values: number[], options: Options = {}) {
  const { alpha = 0.05 } = options;
  const meanValue = mean(values);
  const std = standardDeviation(values);
  const test = [];
  const criticalValue: number = table[values.length - 3][alphas.indexOf(alpha)];
  for (let value of values) {
    const calculatedValue = Math.abs(value - meanValue) / std;
    test.push({
      value,
      result: calculatedValue,
      pass: calculatedValue > criticalValue ? false : true,
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
