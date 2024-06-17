// TODO: What are some best practices for using type inference in typescript:

// 1: Use type inference for simple cases where the assigned value clearly indicates the intended type.
// 2: When in doubt, provide explicit type annotations to make your intention clear.
// 3: Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// 4: Regularly review and refactor your code to ensure the inferred types align with your intentions.

// assume typescript inference for the variable name:

let firstName = "first" // The compiler infers the type string for the variable name.
let age = 22            // The compiler infers the type number for the variable name.
let isValid = true      // The compiler infers the type true for the variable name.