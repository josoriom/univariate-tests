import mean from 'ml-array-mean';
import standardDeviation from 'ml-array-standard-deviation';

import raw from './data/grubbs.json';
import { Table } from './types/Table';

const { table, confidence } = raw as unknown as Table;
/**
 * Grubbs
 * @returns the result of testing an array of values
 */
export function grubbs(values: number[], options: Options = {}) {
  const { type = 'alphas', value = 0.05 } = options;
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
  const criticalValue: number =
    table[values.length - 3][confidence[type].indexOf(value)];
  for (const value of values) {
    const score = Math.abs(value - meanValue) / std;
    test.push({ value, score, pass: score < criticalValue });
  }
  return { criticalValue, test };
}

interface Options {
  type?: string;
  value?: number;
}
