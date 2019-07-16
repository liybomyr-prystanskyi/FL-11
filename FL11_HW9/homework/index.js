let numBer1=0;
let numBer2=1;
let numBer3=2;
let numBer4=3;
let numBer5=5;
let numBer6=8;
let numBer7=1000;
let numBer8=60;
let numBer9=24;
let numBer10=18;
let numBer11=365;

//0
function getNumbers(str) {
  return Array(str.replace(/\D+/g,','));
}
console.log(getNumbers('n1um3ber95'));

//1
function findTypes() {
	let containerObject = {};
	for (let i = numBer1; i < arguments.length; i++) {
		let type = typeof arguments[i];
		if (containerObject.hasOwnProperty(type)) {
			containerObject[type] += numBer2; 
		} else {
			containerObject[type] = numBer2;
		}
	}
	return containerObject;
}
console.log(findTypes(numBer5,'hello',null)); 

//2
const executeforEach = [numBer2,numBer3,numBer4];
function iterate(item, index, array) {
  console.log(item);
  if (index === array.length - 1) {
    console.log('Last iteration');
  }
}
executeforEach.forEach(iterate);

//3
const mapArray = [numBer3,numBer5,numBer6];
let result = mapArray.map(function(item){
   return item + numBer4;
})
console.log(result);

//4
const filterArray = [numBer3,numBer5,numBer6];
function it() {
  const result = filterArray.filter(item => item > numBer4);
  console.log(result);
}
filterArray.forEach(it);

//5
function showFormattedDate(date) {
	const allMonth = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Now','Dec'];
  return 'Date: '+allMonth[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear();
}
console.log(showFormattedDate(new Date('1997-09-10')));

//6 
function canConvertToDate(a){
  return new Date(a).toString() !== 'Invalid Date';
}
console.log(canConvertToDate('2016-13-18T00:00:00'));

//7
  let daysBetween = function(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(),
     dt2.getMonth(),
     dt2.getDate()) - Date.UTC(dt1.getFullYear(),
     dt1.getMonth(),
     dt1.getDate()) ) /(numBer7 * numBer8 * numBer8 * numBer9));
    }
console.log(daysBetween('2016-03-18T00:00:00', '2016-04-19T00:00:00'));

//8
function getAmountOfAdultPeople(data) {
  let eighteenY = numBer10;
  let allDaysInY = numBer11;
  return filterArray(data, function (i) {
      let newD = new Date(i['birthday']);
      return Math.round(daysBetween(new Date(), newD) / allDaysInY) >= eighteenY;
  });
}

//9
function keys(data) {
  let keyElms = []
  for (let keys in data) {
      if (data.hasOwnProperty(keys)) {
        keyElms.push(keys);
      }
  }
  return keyElms;
}
console.log(keys({ keyOne : numBer2, keyTwo : numBer3, keyThree : numBer4 }));

//10
function values(data) {
  let allValues = []
  for (let keys in data) {
      if (data.hasOwnProperty(keys)) {
          allValues.push(data[keys]);
      }
  }
  return allValues;
}
console.log(values({keyOne: numBer2, keyTwo: numBer3, keyThree: numBer4}));