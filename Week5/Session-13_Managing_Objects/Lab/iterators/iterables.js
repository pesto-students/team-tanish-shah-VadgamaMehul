// Technically, iterables must implement the Symbol.iterator method.
// Iterating Over a String , String is built-in iterable Object
for (const x of "Pesto Tech") {
  // code block to be executed
  console.log(x);
}

// Iterating Over an Array, Array is built-in iterable Object
for (const x of [1, 2, 3, 4, 5]) {
  console.log(x);
  // code block to be executed
}
