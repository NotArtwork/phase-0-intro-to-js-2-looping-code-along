// Code your solutions in this file
const newArray = ["Antonio", "Klara", "Justin"];



function writeCards(newArray, eventName) {
    const array = []
    for (let i = 0; i < newArray.length; i++) {
//        console.log(`Thank you, ${newArray[i]}, for the wonderful birthday gifts!`);
        array.push(`Thank you, ${newArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return array
}



function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
        i--;
    }
 
}
//function writeCards(newArray) {
//    let i = 0;
//    while (i < newArray.length); {
//       console.log(`Thank you, ${newArray[i]}, for the wonderful birthday gift!`);
//        i++;
//   }
//
//return newArray;
// }