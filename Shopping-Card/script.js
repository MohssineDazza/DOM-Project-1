document.addEventListener("DOMContentLoaded", function () {
  const increaseButtons = document.querySelectorAll(".fas.fa-plus-circle");
  const decreaseButtons = document.querySelectorAll(".fas.fa-minus-circle");
  const quantityDisplays = document.querySelectorAll(".quantity");

  /////////////////////////////////////////////////////////////////

  //function incrButton plus
  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let currentQuantity = parseInt(quantityDisplays[index].innerText);
      quantityDisplays[index].innerText = currentQuantity + 1;
      updateTotalPrice(); // Call function to update total price
    });
  });

  //////////////////////////////////////////////////////////////////

  // function decrButton minus
  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let currentQuantity = parseInt(quantityDisplays[index].innerText);
      if (currentQuantity > 0) {
        quantityDisplays[index].innerText = currentQuantity - 1;
        updateTotalPrice(); // Call function to update total price
      }
    });
  });
});

////////////////////////////////////////////////////////////////////

// function DeleteButton
document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Assuming you want to remove the whole card when deleting
      const cardBody = button.closest(".card-body");
      cardBody.parentElement.remove();
      updateTotalPrice(); // Call function to update total price
    });
  });
});

////////////////////////////////////////////////////////////////////

// function likButton 
document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".fas.fa-heart");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
    });
  });
});

/////////////////////////////////////////////////////////////////////

// funcion totalPrice 
function updateTotalPrice() {
  let totalPrice = 0;
  const cardBodies = document.querySelectorAll(".card-body");

  cardBodies.forEach((cardBody, index) => {
    const quantity = parseInt(cardBody.querySelector(".quantity").innerText);
    const unitPrice = parseFloat(
      cardBody.querySelector(".unit-price").innerText.replace("$", "")
    );
    totalPrice += quantity * unitPrice;
  });

  document.querySelector(".total").innerText = totalPrice.toFixed(2) + " $"; // Update total price display
}
