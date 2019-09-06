var numbers = [1,2,3,4,5];
var numbers2 = [15, 25, 35, 45, 55, 65, 75, 85, 95];
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
var products = [
  { name: 'banana', type: 'fruit', quantity: 10, price : 15},
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
];

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
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

products.filter(product => product.type === 'fruit'); 

var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 't1' },
  { postId: 3, content: 't2' },
  { postId: 4, content: 't3' },
];

function filtro(post, comments) {
	return comments.filter(comment => comment.postId === post.id);
}

filtro(post, comments);

var nFiltro = numbers2.filter(filtro => filtro>50);
nFiltro;

var filteredUsers = users.filter( user => user.admin);
filteredUsers;

function reject(array, iteratorFunction) {
  return array.filter( array => !iteratorFunction(array));
}