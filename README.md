# Unexpected String Concatenation in JavaScript

This example demonstrates a common JavaScript pitfall: unexpected string concatenation due to loose typing.

The `foo` function intends to add two numbers. However, when one of the arguments is a string, JavaScript performs string concatenation instead of numerical addition.  This can lead to subtle and hard-to-find errors.

The solution shows how to use type checking or explicit type conversion to avoid this issue.