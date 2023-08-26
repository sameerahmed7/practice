let div=document.getElementById('root')
let myproducts=[
    
    {name: 'Real Madrid-Home kit',image:'./2 rmhk.jpg',price: 'rupees-3999/-'},
    
    {name: 'Real Madrid-Away kit',image:'./3 rmak.jpg', price: 'rupees-4999/-'},
    {name: 'Real Madrid-3rd kit',image:'./4 rm3k.jpg', price: 'rupees-4999/-'},
    {name: 'Al Nassr-Home kit',image:'./8 alnassr.jpg', price: 'rupees-3000/-'},
    {name: 'FC Bayern Munich-Home kit',image:'./6 fcbhk.jpg', price: 'rupees-2999/-'},
    {name: 'FC Bayern Munich-Away kit',image:'./7 fcbak.jpg', price: 'rupees-2499/-'},
    {name: 'FC Bayern Munich-3rd kit',image:'./5 fcb3k.jpg', price: 'rupees-3999/-'},
    {name: 'Nike CR7 Shoes',image:'./9 nike.jpg', price: 'rupees-8289/-'},
    {name: 'Play-station 5',image:'./10 ps5.jpg', price: 'rupees-45000/-'},
    {name: 'Nike Football',image:'./1.jpg', price: 'rupees-2500/-'},

]
function displayProducts(){
    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        let name = document.createElement('h2')
        name.textContent=item.name;
        let price=document.createElement('p')
        price.textContent='price:'+ item.price;
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(price)
    })
}