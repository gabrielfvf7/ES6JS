function addNumbers(...numbers) {
    return numbers.reduce( (sum, number) => {
      return sum + number;
    }, 0);
  }
  
  addNumbers(1,2,3,4,5,6,7,8)


  const defaultColors = ['red', 'green']
const favoriteColors = ['orange', 'yellow'];

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
      return [ 'milk', ...items ];
	}
  return items;	
}

validateShoppingList('oranges', 'bread', 'eggs');
[ ...defaultColors, 'blue', ...favoriteColors ]

const MathLibrary = {
    calculateProduct(...rest) {
      console.log('Use multiply');
      return this.multiply(...rest);
    },
    multiply(a, b) {
      return a*b;
    }
  };
  
  MathLibrary.calculateProduct(2,3)