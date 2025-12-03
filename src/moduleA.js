// Module A - Part of circular dependency demonstration
// This file imports Module B, which imports Module A (circular!)

import { functionB, valueB } from './moduleB.js';

export const valueA = 'Value from Module A';

export function functionA() {
    console.log('Function A called');
    // Calling function from Module B creates circular dependency
    return functionB();
}

// Using value from Module B
export function processWithB() {
    console.log('Processing with value from B:', valueB);
    return valueA + ' + ' + valueB;
}

// Initialize - this will cause issues due to circular dependency
const result = functionA();
console.log('Module A initialized with result:', result);
