// Function to calculate hash using hash function 1
function hashFunction1(key) {
    return key % 10; // Adjust 10 as per the requirement for the size of the hash table
  }
  
  // Function to calculate hash using hash function 2
  function hashFunction2(key) {
    return Math.floor(key / 10) % 10; // Adjust 10 as per the requirement for the size of the hash table
  }
  
  // Function to perform Cuckoo Hashing
  function cuckooHashing(keyValuePairs) {
    const maxIterations = 10; // Maximum number of iterations to avoid infinite loops
    const hashTable1 = new Array(10).fill(null); // Initialize hash table 1 with null values
    const hashTable2 = new Array(10).fill(null); // Initialize hash table 2 with null values
  
    function insertIntoHashTable(key, value, table) {
      const hashFunction1Value = hashFunction1(key);
      const hashFunction2Value = hashFunction2(key);
  
      if (table === hashTable1) {
        if (!hashTable1[hashFunction1Value]) {
          hashTable1[hashFunction1Value] = { key, value };
        } else {
          const existingElement = hashTable1[hashFunction1Value];
          hashTable1[hashFunction1Value] = { key, value };
          insertIntoHashTable(existingElement.key, existingElement.value, hashTable2);
        }
      } else {
        if (!hashTable2[hashFunction2Value]) {
          hashTable2[hashFunction2Value] = { key, value };
        } else {
          const existingElement = hashTable2[hashFunction2Value];
          hashTable2[hashFunction2Value] = { key, value };
          insertIntoHashTable(existingElement.key, existingElement.value, hashTable1);
        }
      }
    }
  
    // Iterate through key-value pairs
    for (const pair of keyValuePairs) {
      const [key, value] = pair.split(" ");
      const keyNum = parseInt(key);
  
      let iterations = 0;
      while (iterations < maxIterations) {
        insertIntoHashTable(keyNum, value, hashTable1);
        iterations++;
  
        // Check if all elements are successfully placed in the hash tables
        if (hashTable1.every((element) => element !== null) && hashTable2.every((element) => element !== null)) {
          break;
        }
      }
    }
  
    // Display the contents of both hash tables
    console.log("HashTable 1:");
    hashTable1.forEach((element) => {
      if (element) console.log(`${element.key} ${element.value}`);
    });
  
    console.log("HashTable 2:");
    hashTable2.forEach((element) => {
      if (element) console.log(`${element.key} ${element.value}`);
    });
  }
  
  // Test Case 1
  const input1 = `12 apple
  43 banana
  15 orange
  27 mango
  37 pineapple`;
  console.log("Test Case 1:");
  cuckooHashing(input1.split("\n"));
  
  // Test Case 2
  const input2 = `1 apple
  2 banana
  3 orange
  4 mango
  5 pineapple`;
  console.log("Test Case 2:");
  cuckooHashing(input2.split("\n"));
  