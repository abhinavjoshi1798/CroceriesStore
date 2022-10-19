console.log("script connected");

let cartArr = JSON.parse(localStorage.getItem("items")) || [];
let cartContainer = document.querySelector("#cart");
displayCart(cartArr);

function displayCart(dataArr) {
  cartContainer.innerHTML = null;

  dataArr.forEach(function (el, i) {
    let box = document.createElement("div");
    box.classList = "item";

    let img = document.createElement("img");
    img.src = el.image;
    img.classList = "img";

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = `Price:${el.price}`;
    let total_cart_price = dataArr.reduce(function (acc, el) {
      return acc + Number(el.price);
    }, 0);
    console.log(total_cart_price);
    document.querySelector("#cart_total").innerText = total_cart_price;

    let btn = document.createElement("button");
    btn.setAttribute("class","remove");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      DeleteItem(cartArr, i);
    });

    box.append(img,name,price,btn);
    cartContainer.append(box);
  });
}

function DeleteItem(arr, index) {
  cartArr = arr.filter(function (el, i) {
    return i != index;
  });
  localStorage.setItem("items", JSON.stringify(cartArr));
  displayCart(arr);
}

document.querySelector("#checkout").addEventListener("click",function(){
window.location.href="checkout.html";
})