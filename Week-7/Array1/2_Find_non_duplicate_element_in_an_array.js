let str = prompt('Enter Numbers and give spcebetween two numbers:');


function nonDuplicateElement(str) {
  let num_map = new Map();
  let arr_numStr = str.split(" ");
  for (let i = 0; i < arr_numStr.length; i++) {
    let num = arr_numStr[i];
    if (num_map.has(num)) {
      let frequncy = num_map.get(num);
      num_map.set(num, frequncy + 1);
    } else num_map.set(num, 1);
  }
  for (let elem of num_map.entries()) {
    if (elem[1] === 1) {
      console.log(elem[0]);
    } else continue;
  }
}
nonDuplicateElement(str);
