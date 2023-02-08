Type = Easy way to refer to the different properties + functions that a value has

EX) value: "red"

string

or

It is a value that has all the properties that we assume a string has
EX) .charAt(), .concat(), indexOf()

Examples of Types

- string
- number (positive, negative, decimal)
- boolean
- Date (new Date())
- Todo (custom type we defined in `fetchjson` `index.ts`)

Primitive vs Object Types

- Primitive is basic types, number, boolean, void, undefined, strign, symbol, null
- Object is functions, arrays, classes, objects, we can write that will trick compiler to think object is of certain type (can only do this with 'Object' types)


Inference vs Annotation
- both say what type of value the variable will refer to
- we use annotation when we tell TS the type
- inference is when TS will infer the type based on the value