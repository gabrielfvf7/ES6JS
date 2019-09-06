var numbers = [1,2,3,4,5];
var sum = 0;
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var paints = [
  { color: 'red' },
  { color: 'blue' },
];

numbers.forEach((number) => sum += number);
sum;

var dobros = numbers.map(number => number*2);
dobros;

var heights = images.map( i => i.height );
heights;

var speeds = trips.map( trip => trip.distance/trip.time );
speeds;

function pluck(array, property) {
    var properties = array.map( a => a[property]);
    return properties;
}

pluck(paints, 'color')
