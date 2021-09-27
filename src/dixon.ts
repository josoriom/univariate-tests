// dixon_table.json: Dean, R. B., & Dixon, W. J. (1951). Simplified statistics for small numbers of observations. Analytical chemistry, 23(4), 636-638.
import raw from './data/dixon_table.json';
import { Table } from './types/Table';

const { table, confidence } = raw as unknown as Table;
/**
 * Dixon
 * @returns the result of testing an array of values
 */
export function dixon(values: number[], options: Options = {}) {
  const { type = 'alphas', value = 0.05 } = options;
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
  const sortedValues = values.sort((a, b) => a - b);
  const scores: number[] = [];
  for (const value of sortedValues) {
    const closestValue = getClosestValue(sortedValues, value);
    scores.push(
      Math.abs(value - closestValue) /
        (sortedValues[sortedValues.length - 1] - sortedValues[0]),
    );
  }

  for (let i = 0; i < values.length; i++) {
    test.push({
      value: values[i],
      score: scores[i],
      pass: scores[i] > criticalValue ? false : true,
    });
  }
  return { criticalValue, test };
}

interface Options {
  type?: string;
  value?: number;
}

function getClosestValue(array: number[], target: number): number {
  const values = array.slice();
  const targetIndex = values.indexOf(target);
  values.splice(targetIndex, targetIndex + 1);
  const closestIndex = xFindClosestIndex(values, target);
  return values[closestIndex];
}

// https://github.com/mljs/spectra-processing/blob/master/src/x/xFindClosestIndex.js
/**
 * Returns the closest index of a `target` in an ordered array
 * @param {array<Number>} array
 * @param {number} target
 */

function xFindClosestIndex(array: number[], target: number) {
  let low = 0;
  let high = array.length - 1;
  let middle = 0;
  while (high - low > 1) {
    middle = low + ((high - low) >> 1);
    if (array[middle] < target) {
      low = middle;
    } else if (array[middle] > target) {
      high = middle;
    } else {
      return middle;
    }
  }

  if (low < array.length - 1) {
    if (Math.abs(target - array[low]) < Math.abs(array[low + 1] - target)) {
      return low;
    } else {
      return low + 1;
    }
  } else {
    return low;
  }
}
