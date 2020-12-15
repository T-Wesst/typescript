# TypeScript

## CORE JS TYPES

- Number: all numbers, no differentiation between integers or floats
- String: all text values
- Boolean: only true or false values (no truthy-falsy)
- Object: any JS object, more specific types of objects
- Array: any javascript array, type can be flexible or strict (regarding element types)

## TypeScript Types

- Tuple: defines fixed length and fixed type (array)
- Enum: automatically enumerated global constant identifier
- any: any kind of value, no specific type assignment
- Union: describes a value that can be one of several types
- Literal: concrete sub-type of a collective type (string, boolean, number). literal types allow an exact value which a string, number, or boolean must hav
- Custom Alias Types: creates new name for a type. similar to interfaces but can name primitives, unions, tuples, and any other ype written by hand.
- Object Alias Types: can be used to create your own object type. not limited to storing union types, ability to create complex objects.
- Function Return Types & Void: the absence of any type at all where a function does not return a value
- Functions as Types: describe which type of function specifically to use with expected values/parameters
- Unknown: any value can be stored similar to the any type, however, the type of the value must be checked in order to be reassigned.
