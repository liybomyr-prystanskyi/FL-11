//0
function getNumbers(str) {
  return Array(str.replace(/\D+/g,','));
}
console.log(getNumbers('n1um3ber95'));
//result(1,3,95)'

//1
function findTypes() {
	let containerObject = {};
	for (let i = 0; i < arguments.length; i++) {
		let type = typeof arguments[i];
		if (containerObject.hasOwnProperty(type)) {
			containerObject[type] += 1; 
		} else {
			containerObject[type] = 1;
		}
	}
	return containerObject;
}
console.log(findTypes(null,5,'hello')); 
 //result{object:1, Number:1, String:1};

//2
const executeforEach = [1,2,3];
function iterate(item, index, array) {
  console.log(item);
  if (index === array.length - 1) {
    console.log('Last iteration!');
  }
}
executeforEach.forEach(iterate);
//result (1,2,3,Last Iterate)

//3
const mapArray = [2,5,8];
var result = mapArray.map(function(item){
   return item+3;
})
console.log(result);
//result(5,8,11)

//4
const filterArray = [2,5,8];
function it(item, index, array) {
  const result = filterArray.filter(item => item > 3);
  console.log(result);
}
filterArray.forEach(it);
//result(5,8)

//5
function showFormattedDate(date) {
	const allMonth = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Now','Dec'];
  return 'Date: '+allMonth[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear();
}
console.log(showFormattedDate(new Date('1997-09-10')));
//result sep 10 1997

//6 
function canConvertToDate(a){
  return new Date(a).toString() !== 'Invalid Date';
}
console.log(canConvertToDate('2016-1-18T00:00:00'));

//7
  let daysBetween = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(daysBetween('2016-03-18T00:00:00', '2016-04-19T00:00:00'));


