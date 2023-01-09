fetch("featuredList.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    let featuredcontent = document.querySelector(".grid-container");
    let output = "";
    for (let item of items) {
      output += `
            <div class="grid-item">
                <img src='${item.url}' />
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price}</p>
            </div>
        `;
    }
    featuredcontent.innerHTML = output;
  });

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
