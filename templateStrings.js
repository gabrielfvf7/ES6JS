const a = 5
const b = 4

const result = `Soma é ${a+b}`;

function t() { 
  return "usando string templates";
}

const str = `Estou ${t()}`

function highlight(strings, ...values) {
  let str = '';
  strings.forEach( (string, i) => {
    str += string + (values[i] || '');
  });
  return str;
}

const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog name is ${name} and he is ${age} years old`;



str
result
sentence