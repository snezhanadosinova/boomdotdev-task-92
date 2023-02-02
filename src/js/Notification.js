import classNames from "classnames";
import { formatCurrency } from "./utils";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.notificationDiv = document.querySelector(".notifications");
  }

  render({ type, price }) {
    const template = `
<div class="notification type-${type.toLowerCase()} ${classNames({
      "is-danger": type === "hawaiian",
    })}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price"> ${formatCurrency(
      price
    )} </span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.notificationDiv.appendChild(this.container);
    let closeBtns = document.getElementsByClassName("delete");
    for (const btn of closeBtns) {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    }
  }

  empty() {
    document.querySelector("notifications").innerHTML = "";
  }
}
