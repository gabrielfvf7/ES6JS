var numbers = [10,20,30];

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var trips = [
  { distance: 34 },
  { distance: 12 },
  { distance: 1  }
];

function balancedParens(string) {
  return !string.split("").reduce(
    (previous, char) => {
      if (previous < 0) { return previous; }
      if (char === "(") { return ++previous; }
      if (char === ")") { return --previous; }
      return previous;
    }, 0);
}

function unique(array) {
  return array.reduce( (previous, actual) => {
      if( !previous.find(p => p === actual) ) {
          previous.push(actual);
      }
      return previous
  } 
  ,[])
}

numbers.reduce( (sum, number) => sum + number, 0);

primaryColors.reduce(
  (previousColor, primaryColor) => {
    previousColor.push(primaryColor.color) 
  	return previousColor
  } ,[]);

balancedParens("()()()()(()())")

trips.reduce((p,a) => p+a.distance, 0)

desks.reduce( (desks, actual) => {
    actual.type === 'sitting' ? ++desks.sitting : ++desks.standing
    return desks;
}, { sitting: 0, standing: 0 });

unique([1,1,1,2,3,4])