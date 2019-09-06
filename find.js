var users = [
    { name: 'Jill', hasSubmitted: true },
    { name: 'Alex', hasSubmitted: false },
    { name: 'Bill', hasSubmitted: true }
  ];
  
  var posts = [
    { id: 1, title: 'New' },
    { id: 2, title: 'Old' }
  ];
  
  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var ladders = [
    { id: 1,height: 20 },
    { id: 2,height: 25 }
  ];
  
  var computers = [
    { name: 'Apple', ram: 16 },
    { name: 'Acer', ram: 32 }
  ];
  
  var comment = { postId: 1, content: 'Great' };
  var user = users.find( u => u.name === 'Alex');
  var account = accounts.find(acc => acc.balance === 12);
  
  function postForComment(posts, comment) {
    return posts.find( post => post.id === comment.postId );
  }
  
  function findWhere(array, criteria) {
    return array.find(a => a[Object.keys(criteria)] === criteria[Object.keys(criteria)])
  }
  
  user
  postForComment(posts, comment)
  findWhere(ladders, {height: 25});
  account
  '---'
  computers.every(pc => pc.ram > 26)
  computers.some(pc => pc.ram > 30)
  users.every(user => user.hasSubmitted)