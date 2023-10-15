let str = '1 2 4 6 5'
function checkDuplicate(str){
    //Split the input string by spaces to get an array of integers.
    let arrNum = str.split(" ").map(Number);
    let len = arrNum.length;
    //Create an empty hash table.
    const map = new Map();
    //Iterate through each element in the array.
    for(let i=0;i<len;i++){
        //For each element, check if it already exists in the hash table.
        if(map.has(arrNum[i])){
            //If the element is already present, it is a duplicate. Display a message and exit.
            return 'There are duplicate elements in the array.';
        }
        else{
            //If the element is not present, add it to the hash table.
            map.set(arrNum[i],i);
        }
    }
    //If all elements have been checked without finding any duplicates, display a message indicating no duplicates were found.
    return 'There are no duplicate elements in the array';
}

console.log(checkDuplicate(str));