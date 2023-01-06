fetch("featuredList.json")
.then(function(response){
    return response.json();
})
.then(function (items) {
    let featuredcontent = document.querySelector(".grid-container");
    let output = "";
    for(let item of items){
        output += `
            <div class="grid-item">
                <img src='${item.url}' />
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>
        `;
    }
    featuredcontent.innerHTML = output;
})

