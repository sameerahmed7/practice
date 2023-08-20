let div=document.getElementById('root')
let myproducts=[
    {name: 'Real Madrid-Home kit',image:'./2 rmhk.jpg'},
    {name: 'Real Madrid-Away kit',image:'./3 rmak.jpg'},
    {name: 'Real Madrid-3rd kit',image:'./4 rm3k.jpg'},
    {name: 'Al Nassr-Home kit',image:'./8 alnassr.jpg'},
    {name: 'FC Bayern Munich-Home kit',image:'./6 fcbhk.jpg'},
    {name: 'FC Bayern Munich-Away kit',image:'./7 fcbak.jpg'},
    {name: 'FC Bayern Munich-3rd kit',image:'./5 fcb3k.jpg'},
    {name: 'Nike CR7 Shoes',image:'./9 nike.jpg'},
    {name: 'Play-station 5',image:'./10 ps5.jpg'},
    {name: 'Nike Football',image:'./1.jpg'},

]
function displayProducts(){
    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="100%"
        div.appendChild(image)
    })
}