# MongoDB $in Operator with Single Element

This example demonstrates an uncommon error related to the usage of the `$in` operator in MongoDB queries when dealing with a single element. The `$in` operator is typically used to query documents where a field's value exists in a specified array. However, using it with only one element can lead to unexpected results.

## Bug
The provided JavaScript code attempts to find a document with the name 'John Doe'. The query uses the `$in` operator with an array containing only one element. While seemingly correct, it does not produce the desired result and returns an empty array.

## Solution
The solution is simple and avoids using the `$in` operator when dealing with a single value. Using the equality operator (`=`) directly provides the correct result.
