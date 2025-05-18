/* 
DEFINITION
--A data structure is way to store and organize data
so that it can be used efficiently
--A data structure is a collection of data values, the relationships
among them, and the functions or operations that can be applied to that data


WHY LEARN DATA STRUCTURES?
--Almost every application we build involves data that is
modelled in a certain way
--To efficiently manage the data, you need data structures
--Imagine walking into a library only to find out there is no efficient
organization of the books and they are stored randomly
--The difference between a function taking a few milliseconds vs a few seconds
or even minutes comes down to the selection of the right data structure
--Data structures help you solve problems in a more efficient way, both in
terms of time and memory
--Learning about data structures also help you gain a more profound understanding
of things you're already aware of
--DOM - Tree data structure
--Browser back and forward - Stack data structure
--OS job scheduling - Queue data structure

OVERVIEW
--Built in data structures
Arrays
Objects
Sets
Maps
--Custom data structures
Stacks
Queues
Circular Queues
Linked Lists
Hash Tables
Trees
Graphs

ARRAY
--An array is a data structure that can hold a collection of values
--Arrays can contain a mix of different data types. You can store strings, booleans, numbers
or even objects all in the same array
--Arrays are resizable. You don't have to declare the size of an array before creating it
--JavaScript arrays are zero-indexed and the insertion order is maintained
--Arrays are iterables. They can be used with a for of loop

ARRAY - BIG-O TIME COMPLEXITY
--Insert/Remove from end - O(1)
--Insert/Remove from beginning - O(n)
--Access - O(1)
--Search - O(n)
--Push/Pop - O(1)
--Shift/unshift/concat/slice/splice - O(n)
--forEach/map/filter/reduce - O(n)

OBJECT
--An object is an unordered collection of key-value pairs. The key must either
be a string or symbol data type where as the value can be of any data type
--To retrieve a value, you can use the corresponding key. This can be achieved
using the dot notation or bracket notation
--An object is not an iterable. You cannot use it with a for of loop

OBJECT - BIG-O TIME COMPLEXITY
--Insert/Remove/Access - O(1)
--Search/Object.keys/Object.values/Object.entries - O(n)

SET
--A set is a data structure that can hold a collection of values. The values however
must be unique
--Set can contain a mix of different data types. You can store string, booleans, numbers
or even objects all in the same set
--Sets are dynamically sized. You don't have to declare the size of a set before creating it
--Sets do not maintain an insertion order
--Sets are iterables. They can be used with a for of loop

SET vs ARRAY
--Arrays can contain duplicate values whereas sets cannot
--Arrays maintain an insertion order whereas sets do not
--Searching and deleting an element in the set is faster than in an array

MAP
--A map is an unordered collection of key-value pairs. Both keys and values
can be of any data type
--To retrieve a value, you can use the corresponding key
--Maps are iterables. They can be used with a for of loop

OBJECT vs MAP
--Objects are unordered whereas maps are ordered
--Keys in objects can only be strings or symbols whereas keys in maps can be of any data type
--An object has a prototype and may contain default keys whereas a map does not
--Objects are not iterables whereas maps are
--The number of items in an object must be determined manually where as it is
readily available with the size property in a map
--Apart from storing data, you can attach functionality to an object whereas
maps are restricted to  just storing data

STACK
--The stack data structure is a sequential collection of elements that follows the principle of
Last In First Out (LIFO)
--The last element added to the stack is the first one to be removed
--A stack of plates. The last plate added to the stack is the first one to be removed
--Stack is an abstract data type. It is defined by its behavior rather than being a
mathematical model
--The stack data structure supports two main operations
  Push - Add an element to the top of the stack
  Pop - Remove the top element from the stack
--Stack usage
  Browser history tracking
  Undo/Redo functionality when typing
  Expression conversions and evaluations
  Call stack in JavaScript run-time
*/