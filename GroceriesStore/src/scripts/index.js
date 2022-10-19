// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries
console.log("script connected");

async function groceriesData() {
  try {
    var response = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`
    );
    console.log(response);
    data = await response.json();
    console.log(data.data);
    appendGroceries(data.data);
  } catch (error) {
    console.log(error);
  }
}
groceriesData();

let divItems = document.querySelector("#items");

let cartArr = JSON.parse(localStorage.getItem("items")) || [];

// console.log(cartArr.length);
document.querySelector("#item_count").innerHTML=cartArr.length;

function appendGroceries(arrObj) {
  divItems.innerHTML = null;

  arrObj.map(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let img = document.createElement("img");
    img.src = el.image;
    img.style.width = "100%";

    let p1 = document.createElement("p");
    p1.innerText = el.name;

    let p2 = document.createElement("p");
    p2.innerText = `₹${el.price}`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "add_to_cart");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartArr.push(el);
      localStorage.setItem("items", JSON.stringify(cartArr));
      let count_div = document.querySelector("#item_count");
      count_div.innerText = cartArr.length;
    });

    div.append(img, p1, p2, btn);

    divItems.append(div);
  });
}
document.querySelector("#go_to_cart").addEventListener("click",function(){
    window.location.href="cart.html";
})