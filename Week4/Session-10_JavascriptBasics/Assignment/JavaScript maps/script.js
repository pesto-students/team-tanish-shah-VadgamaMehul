function calcWordFrequencies() {
  //add prompt
  let str = prompt("Write statment(give space):");

  //split string into array
  let str_arry = str.split(" ");

  // decelare Map
  const word_map = new Map();

  //itrate str_arry for store uniq key and value
  for (let i = 0; i < str_arry.length; i++) {
    // saprate all word
    let word = str_arry[i];

    //check if word is already present in Map
    if (word_map.has(word)) {
      //if yes/true then it take that
      let frequncy = word_map.get(word);
      word_map.set(word, frequncy + 1);
    } else word_map.set(word, 1);
  }
  for (let [word, frequncy] of word_map) {
    console.log(word, frequncy);
  }
}

//call function for output
calcWordFrequencies();
