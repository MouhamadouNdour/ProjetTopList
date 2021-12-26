TOP = (() => {

    const init = () => {
        if (!localStorage.database) {
            let top = [{
                id: 1,
                title: "Meilleurs footballeurs",
                description: "Mes meilleurs joueurs de football de cette saison",
                items: [{
                    label: "Karim Benzema",
                    img: "/assets/foot1.jpg",
                }, {
                    label: "Antoine Griezman",
                    img: "/assets/foot2.jpg",
                }, {
                    label: "Eriksen",
                    img: "/assets/foot3.jpg",
                },]
            }]
            localStorage.setItem("database", JSON.stringify(top))
        }
        // Réinitialise la page home
        var elements = document.getElementsByClassName("top-item");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        // Affiche les éléments stockés dans le localStorage
        let database = JSON.parse(localStorage.database)
        console.log(database)
        var elements = []
        database.forEach((top, i) => {
            elements[i] = document.createElement("div")
            elements[i].setAttribute("class", "top-item")
            elements[i].innerHTML = top.title
            elements[i].addEventListener("click", () => {
                showTop()
                $("#page2").removeClass("hidden")
                $("#page1").addClass("hidden")
                $("#page3").addClass("hidden")
                $("#page4").addClass("hidden")
            })
            document.getElementById("body-page").appendChild(elements[i])
        })
    }

    return { init }
})();

const showTop = () => {
    setBodyToWhite()
    var tops = document.getElementById("top-items")
    var div = document.createElement("div")
    div.setAttribute("class", "top")
    var topItems = document.createElement("div")
    topItems.setAttribute("class", "topItems")

    let database = JSON.parse(localStorage.database)
    var elements = []
    var elements3 = []
    var imagesContainer = []
    var images = []
    var titre = []
    database.forEach((top, i) => {
        elements[i] = document.createElement("h2")
        elements3[i] = document.createElement("p")
        top.items && top.items.forEach((topItem, j) => {
            imagesContainer[j] = document.createElement("div")
            imagesContainer[j].setAttribute("class", "mytop-item-image")
            titre[j] = document.createElement("h2")
            titre[j].setAttribute("class", "mytop-item-title")
            titre[j].innerHTML = (j + 1) + ". " + topItem.label
            images[j] = document.createElement("img")
            images[j].setAttribute("src", topItem.img)
            imagesContainer[j].appendChild(images[j])
            topItems.appendChild(titre[j])
            topItems.appendChild(imagesContainer[j])
        })
        elements[i].innerHTML = top.title
        elements3[i].innerHTML = top.description
        div.appendChild(elements[i])
        div.appendChild(elements3[i])
        top.items && div.appendChild(topItems)
    })

    tops.appendChild(div)
}

TOP.init()

exports.TOP = TOP;