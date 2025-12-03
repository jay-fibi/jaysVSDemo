// Module B - Part of circular dependency demonstration
// This file imports Module A, which imports Module B (circular!)

import { functionA, valueA } from './moduleA.js';

export const valueB = 'Value from Module B';

export function functionB() {
    console.log('Function B called');
    // Calling function from Module A creates circular dependency
    return functionA();
}

// Using value from Module A
export function processWithA() {
    console.log('Processing with value from A:', valueA);
    return valueB + ' + ' + valueA;
}

// Initialize - this will cause issues due to circular dependency
const result = functionB();
console.log('Module B initialized with result:', result);
