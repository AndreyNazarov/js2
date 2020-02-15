// logItems[0] = '1-Mango';
// console.log(logItems[0]);
// console.log(logItems[1]);
// console.log(logItems[2]);
// console.log(logItems[3]);
// console.log(logItems[4]);
// console.log(logItems[5]);

// for(const logItem of logItems){
//     console.log(logItems.length + "-" + logItem);
// }

// for(let i=1; i < logItems.length; i += 1) {
// console.log(i + " " + "-" + " " + logItems[0])
// }



const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    let item = array[i];
    console.log(`${i+1} - ${item}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

