console.log("hello world")
setTimeout(function a(){
    console.log("Hello World")

},5000
)
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json => {console.log(json)}).catch(error => console.log(error))