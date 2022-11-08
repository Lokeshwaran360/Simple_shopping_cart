let basket = JSON.parse(localStorage.getItem("data")) || [];

let shopItemData =[{
    id: "ci1",
    name: "casual shirt",
    price: 349,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-1.jpg"
}, 

{
    id: "ci2",
    name: "Formal shirt",
    price: 679,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-2.jpg"
}, 
{
    id: "ci3",
    name: "T-shirt",
    price: 239,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-3.jpg"
}, 
{
    id: "ci4",
    name: "Men's casual suit",
    price: 879,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-4.jpg"
}
];

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x)=>{
        let {id, name, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
               <img width="220" src=${img} alt="">
               <div class="details">
                   <h3>${name}</h3>
                   <p>${desc}</p>
               </div>
               <div class="price-quantity">
                   <h2>Rs. ${price}</h2>
                   <div class="buttons"></div>
                   <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                   <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                   <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
               </div>
           </div>
        
        `
    }).join("")) ;
};
generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined){

    basket.push({
         id: selectedItem.id,
         item: 1,
    });
} else{
    search.item += 1;
} 
 //console.log(basket);
 update(selectedItem.id);
 localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return
    else if (search.item === 0) return;

    
else{
    search.item -= 1;
}  

 //console.log(basket);
 update(selectedItem.id);
 localStorage.setItem("data", JSON.stringify(basket));
 //basket = basket.filter((x) => x.item !== 0);
 
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
     };

     calculation();