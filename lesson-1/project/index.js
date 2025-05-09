const form = document.querySelector("#form_orders");
const container = document.querySelector("#order_container");
const selector = document.querySelector("#order_options");
const start_order = document.querySelector(".async_container");

const ordersList = {
  coffee: "Mexican coffee",
  ch_donut: "Chocolate donut",
  sandwich: "Chicken sandwich",
  cookie: "Vanilla cookie",
};

document.addEventListener("DOMContentLoaded", () => {
  Object.entries(ordersList).map(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.text = value;
    selector.appendChild(option);
  });
});

const handledSubmit = (event) => {
  console.log(event);
  event.preventDefault();
  console.log("form");

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const li = document.createElement("li");
  li.textContent = ordersList[data.order_options];
  container.appendChild(li);
};

form.addEventListener("submit", handledSubmit);


const startOrder = () => {
    const orderPromise = new Promise((resolve, reject) => {
        if(ordersList.length === 0) {
          reject(new Error('Data is empty'));
        }

        setTimeout(() => {
            resolve("foo")
        }, 3000)
    })

    orderPromise
        .then(() => container.innerHTML = "<h3>Your order is ready</h3>")
        .catch(() => container.innerHTML = "<h3>Error with the order</h3>")
    
    container.innerHTML = "<h3>We're preparing your order</h3>"
}



start_order.addEventListener("click", startOrder);
