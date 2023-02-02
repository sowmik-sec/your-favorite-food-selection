document.onclick = function (event) {
  // adding to list item
  let btn = event.srcElement.id;

  console.log(btn);
  if (btn.substring(0, 3) == "btn") {
    document.getElementById(btn).disabled = true;
    document.getElementById(btn).style.backgroundColor = "gray";
    document.getElementById("btn-checkout").disabled = false;
    document.getElementById("btn-checkout").style.backgroundColor = "green";
  }

  let item = btn.substring(4, btn.length);
  const itemName = document.getElementById(item + "-item").innerText;
  let list = document.createElement("li");
  list.innerText = itemName;
  document.getElementById("item-list").appendChild(list);

  //   item count
  const itemCount = document.getElementById("item-count").innerText;
  const count = parseInt(itemCount);
  document.getElementById("item-count").innerText = count + 1;

  //   console.log(itemName);

  //   calculating price
  let price = document.getElementById(item + "-price");
  price = parseFloat(price.innerText);
  console.log(price);
  let curTotalPrice = parseFloat(
    document.getElementById("total-price").innerText
  );
  if (isNaN(price) == false) {
    document.getElementById("total-price").innerText = price + curTotalPrice;
  }
};
