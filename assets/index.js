// function task1 (){
//     fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const products = data.sort((a,b) => b.unitprice - a.unitprice)
//         const baha = products[0]
//         console.log(baha);
//     })
// }
// window.onload = () => {
//     task()
// }

//yarimciq
// function task2 (){
//     fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//     })
// }

// function task3 (){
//     fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const products = data.filter(product => product.name.startsWith('C'));
//         products.forEach(product => {
//             console.log(product.name);
//         }) 
//     })
// }
// window.onload = () => {
//     task3()
// }

// function task4 () {
//     fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(customer => {
//             if(customer.address.city === 'London'){
//                 console.log(country.contactName);
//             }
//         })
//     })
// }
// window.onload = () => {
//     task4()
// }

// function task5 () {
//     fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const nulll = data.filter(customer => customer.address.region === 'NULL')
//         console.log(nulll.length);
//     })
// }
// window.onload = () => {
//     task5()
// }

// function task6 () {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         const swp = data.filter(item => item.userId == '1')
//         console.log(swp.length);
//     })
// }
// window.onload = () => {
//     task6 ()
// }

// function task7 () {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res => res.json())
//     .then(data => {
//         const fotos = data.filter(item => item.userId == '1');
//         console.log(fotos.length);
//     })
// }
// window.onload = () => {
//     task7 ()
// }