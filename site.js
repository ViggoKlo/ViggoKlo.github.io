const pizza1 = {name: "Margarita", picture : "products/Margherita.jpg", ingredients: "Tomatsås, Ost", price: "85 SEK", amount: 0};
const pizza2 = {name: "Vesuvio", picture : "products/vesuvio.jpg", ingredients: "Tomatsås, Ost, Skinka", price: "90 SEK", amount: 0};
const pizza3 = {name: "Tomaso", picture : "products/tomaso.jpg", ingredients : "Skinka, Räkor", price : "100 SEK", amount: 0}
const pizza4 = {name: "Hawaii", picture : "products/hawaii.jpg", ingredients : "Skinka, Ananas", price : "100 SEK", amount: 0}
const pizza5 = {name: "Capricciosa", picture : "products/capricciosa.jpg", ingredients : "Skinka, Färska Champinjoner", price : "100 SEK", amount: 0}
const pizza6 = {name: "Calzone (inbakad)", picture : "products/calzone.jpg", ingredients : "Tomatsås, Ost, Skinka", price : "110 SEK", amount: 0}
const pizza7 = {name: "Kebabpizza", picture : "products/kebabpizza.jpg", ingredients : "Kebabkött, Lök, Färska Champinjoner, Peperoni, sås", price : "120 SEK", amount: 0}
const pizza8 = {name: "Indiana", picture : "products/indiana.jpg", ingredients : "kyckling, Färska Champinjoner, Curry", price : "110 SEK", amount: 0}

const prods = [pizza1,pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8]

const produkter = document.getElementById("produkter");
const shoppingCart = document.getElementById("cart")

function showProducts(){
    const container = document.createElement("div");
    container.classList.add("pizzor");
    for(const prod of prods){


        const product = document.createElement("div");
        const picContainer =  document.createElement("div");
        const pic =  document.createElement("img");
        const text = document.createElement("div");
        const name =  document.createElement("p");
        const description =  document.createElement("p");
        const price =  document.createElement("div");
        const buyButton = document.createElement("button");

        buyButton.onclick = () => {
            const prodAmountIncrease = document.getElementById(prod.name);
            prodAmountIncrease.innerText ++;
        }

        product.classList.add("pizza");
        picContainer.classList.add("bildContainer");
        pic.classList.add("bild");
        text.classList.add("namnBeskrivning");
        name.classList.add("namnText");
        description.classList.add("beskrivningText");
        price.classList.add("pris");
        buyButton.classList.add("order")


        name.innerText = prod.name;
        description.innerText = prod.ingredients;
        price.innerText = prod.price;
        buyButton.innerText = "Lägg i kundvagn"

        picContainer.appendChild(pic)
        price.appendChild(buyButton)
        text.appendChild(name)
        text.appendChild(description)
        product.appendChild(picContainer)
        product.appendChild(text)
        product.appendChild(price)

        pic.src = prod.picture;
        container.appendChild(product);

    }
    produkter.appendChild(container);
}

function showCart() {
    
    const cartContainer = document.createElement("div");

    for(const prod of prods) {

        const itemContainer = document.createElement("div");
        const itemName = document.createElement("div");
        const itemAmount =  document.createElement("div");
        const removeButtonContainer = document.createElement("div");
        const removeButton = document.createElement("button");

        itemContainer.classList.add("cartItems");
        removeButtonContainer.classList.add("buttonContainer");
        removeButton.classList.add("deleteButton");
        itemName.classList.add("pizzaName");
        itemAmount.classList.add("pizzaAmount")

        itemName.innerText = prod.name;
        itemAmount.innerText = prod.amount;

        itemAmount.id = prod.name; 

        removeButton.innerText = "Ta bort";

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemAmount);
        removeButtonContainer.appendChild(removeButton);
        itemContainer.appendChild(removeButtonContainer);

        cartContainer.appendChild(itemContainer)

        removeButton.onclick = () => {
            const prodAmountDecrease = document.getElementById(prod.name);
            prodAmountDecrease.innerText = 0;
        }
    }

    let summary = 0;



    const totalPriceContainer = document.createElement("div");
    const totalPrice = document.createElement("p");

    totalPrice.innerText = "Summa: " + summary;

    totalPriceContainer.appendChild(totalPrice);

    cartContainer.appendChild(totalPriceContainer);

    shoppingCart.appendChild(cartContainer);

    cartContainer.classList.add("cart");

    totalPrice.classList.add("totaltPris");
}

showProducts();

showCart();
