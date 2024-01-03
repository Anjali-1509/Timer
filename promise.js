const getData = async(id)=>{
let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
let data = await res.json()
console.log(data)
}

getData(2)