// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function fetchGet (){
//     fetch('https://northwind.vercel.app/api/orders')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// }
// window.onload = () =>{
//     fetchGet()
// }

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function fetchPost (){
//     fetch('https://northwind.vercel.app/api/orders',{
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             orderDate: inp.value
//         }),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);        
//     })
// }
// btn.addEventListener('click', fetchPost)


// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function fetchGet (){
//     fetch('https://northwind.vercel.app/api/suppliers')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
// }
// window.onload = ()=>{
//     fetchGet()
// }

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function fetchPost (){
//     fetch('https://northwind.vercel.app/api/suppliers',{
//     method: "POST",
//     headers: {
//        "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         companyName: inp.value
//     }),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
// }
// btn.addEventListener('click', fetchPost)

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// axios.get('https://northwind.vercel.app/api/orders')
// .then((res) => {
//     console.log(res.data);
// })

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function axiosPost (){
//     axios.post('https://northwind.vercel.app/api/orders',{
//     name: inp.value,
// })
// .then((res) => {
//     console.log('melumat ugurla gonderildi');
// });
// }
// btn.addEventListener('click',axiosPost)

// axios.get('https://northwind.vercel.app/api/suppliers')
// .then((res)=>{
//     console.log(res.data);
// })

// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function axiosPost (){
//     axios.post('https://northwind.vercel.app/api/orders',{
//     name: inp.ariaValueMax,    
//     })
//     .then((res)=> {
//         console.log('melumat gonderildi');
//     });
// }
// btn.addEventListener('click',axiosPost)