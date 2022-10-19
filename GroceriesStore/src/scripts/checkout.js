console.log("script connected")

function checkout(n,p,a){
    this.name = n,
    this.number = p,
    this.address = a
}


document.querySelector("#place-order").addEventListener("click",notification)

function notification(){
    let h4 = document.getElementById("order-message");
    h4.innerText="Your order is successfully placed";
    localStorage.clear();
    
    
}