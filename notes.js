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

QUEUE
--The queue data structure is a sequential collection of elements that follows
the principle of First In First Out (FIFO)
--The first element added to the queue is the first one to be removed
--A queue of people waiting in line. The first person to arrive is the first one to be served
--Queue is an abstract data type. It is defined by its behavior rather than being a
mathematical model
--The queue data structure supports two main operations
  Enqueue - Add an element to the end/rear/tail of the queue
  Dequeue - Remove the first/front/head element from the queue
--Queue usage
  Print job scheduling
  Call center systems
  Task scheduling in operating systems
  Callback queue in JavaScript

CIRCULAR QUEUE
--The size of the queue is fixed and a single block of memory is used as if the
first element us connected to the last element
--Also referred to as circular buffer or ring buffer and follows the FIFO principle
--A circular queue will reuse the empty block created during the dequeue operation
--When working with queues with fixed maximum size, a circular queue is a great
implementation choice
--The circular queue data structure supports two main operations
  Enqueue - Add an element to the end/rear/tail of the queue
  Dequeue - Remove the first/front/head element from the queue
--Circular queue usage
  Clock
  Streaming data
  Traffic lights

LINKED LIST
--A linked list is a linear data structure that includes a series of connected nodes
--Each node consists of a data value and a pointer that points to the next node
--The list elements can be easily inserted or removed without reallocation or reorganization
of the entire structure
--Random access of elements is not feasible and accessing an element has linear time complexity
--The linked list data structure supports three main operations
  Insertion -  to add an element to the list
  Deletion - to remove an element from the list
  Searching - to find an element in the list
--Linked list usage
  All applications of both stacks and queues are applications of linked lists
  Image viewer

HASH TABLE
--A hash table, also known as hash map, is a data structure that is used to store key-value pairs
--Given a key, you can associate a value with that key for very fast lookup
--We store the key value pairs in a fix sized array
--Arrays have a numeric index
--How do we go from using a string as an index to number as an index?
--A hashing function accepts the string key, converts it into a hash code using a defined logic
and them maps it into a numeric index that is within the bounds of the array
--Using the index, store the value
--The same hashing function is reused to retrieve the value given a key
  Set to store a key-value pair
  Get to retrieve a value given its key
  Remove to delete a key value pair
--Hash Table Usage
  Hash tables are typically implemented where constant time lookup and insertion are required
  Database indexing
  Caches  

TREE
--A tree is a hierarchical data structure that consists of nodes
connected by edges
--A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues
which are linear data structures.
--In linear data structures, the time required to search is proportional to the size of
the data set
--Trees however, owing to the nonlinear nature allow quicker and easier access to data
--A tree will not contain any loops or cycles
--Tree Usage
  File systems for directory structure
  A family tree
  An organisation tree
  DOM
  Chat bots
  Abstract syntax trees

BINARY TREE
--A binary tree is a tree data structure in which each node has at most two children
--The children are referred to as the left child and the right child
--The value of the left child is less than the value of the parent node
--The value of the right child is greater than the value of the parent node
--Each node in a binary tree can have at most two children
--Binary search tree has the following operations
  Insert - Add a new node to the tree
  Search - Find a node in the tree
  Delete - Remove a node from the tree
  DFS - Traverse the tree in depth first manner
  BFS - Traverse the tree in breadth first manner
--Binary tree usage
  Searching
  Sorting
  To implement abstract data types such as lookup table and priority queues
--Depth First Search(DFS)
  --In a depth first search, we start at the root node and explore as far as possible along each branch before backtracking
  --Visit the root node, visit all the nodes in the left subtree, then visit all the nodes in the right subtree
  --Depending on the order of traversal, there are three types of depth first search
  --Pre-order - Visit the root node, then visit the left subtree, then visit the right subtree
  --In-order - Visit the left subtree, then visit the root node, then visit the right subtree
  --Post-order - Visit the left subtree, then visit the right subtree, then visit the root node
*/