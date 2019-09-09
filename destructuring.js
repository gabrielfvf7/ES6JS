const savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
  };
  
  function fileSummary({ name, extension, size}, {color}) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
  }
  
  fileSummary(savedFile, {color: 'red'})

  const companies = [
    'Google',
    'Facebook',
    'Uber'
  ];
  
  const [ name, ...rest ] = companies;
  const { length } = companies;
  length;
  name
  rest

  const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' }
  ];
  
  const [{ location }] = companies;
  
  const Google = {
    a: ['Silicon Valley', 'New York']
  };
  
  const { a: [a] } = Google;
  
  const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
  }

  const numbers = [1, 2, 3];

function double([num, ...rest]) {
  if (rest.length === 0) {
    return [num * 2];
  }
  return [num * 2, ...double(rest)];
}