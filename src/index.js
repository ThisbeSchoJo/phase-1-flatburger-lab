// index.js
//one deliverable per function

// Callbacks
const displayBurgerDetails = (burger) => {
    // console.log(burger)
    const detailImageElement = document.getElementById('image')
    detailImageElement.src = burger.image
    // console.log(detailImageElement)
    const nameElement = document.getElementById("name")
    nameElement.textContent = burger.name
    const numInCart = document.getElementById("number-in-cart-count")
    numInCart.textContent = burger.number_in_cart
    console.log(numInCart)
    // console.log(nameElement)
     //add advanced deliverable 1 here
};

const addToCart = () => {
    const form = document.querySelector("#add-to-cart-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const numberToAdd = document.querySelector("#number-to-add")
        const numInCart = document.getElementById("number-in-cart-count")
        const sum = parseInt(numberToAdd.value) + parseInt(numInCart.textContent) //you access input values with .value (bc it doesn't have closing tag) and span elements with textContent (because it has opening and closing tags)
        numInCart.textContent = sum
        form.reset()
    })
}


const addBurgerNamesToMenu = () => {
    // Add code (will be the function that has all the logic)
    fetch('http://localhost:3000/burgers') 
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach( burger => {
            const spanElement = document.createElement("span")
            spanElement.textContent = burger.name
            const restaurantMenu = document.getElementById("restaurant-menu")
            restaurantMenu.appendChild(spanElement)

            spanElement.addEventListener("click", () => displayBurgerDetails(burger))
            if(burgers.length < 1){
                displayBurgerDetails(burgers[0])
            }
        })

    })
};


const main = () => {
    document.addEventListener("DOMContentLoaded", () => {
        addBurgerNamesToMenu()
        addToCart()
    })
}

main()

