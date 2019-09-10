promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve();
    }, 3000)
});

promise
    .then(() => console.log('show de bola'))
    .catch(() => console.log('deu ruim'))


url = "https://jsonplaceholder.typicode.com/posts123456/";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));