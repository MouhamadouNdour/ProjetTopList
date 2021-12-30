TOP = (() => {

    const init = () => {
        if (!localStorage.database) {
            let top = [{
                id: 1,
                title: "Meilleurs footballeurs",
                description: "Mes meilleurs joueurs de football de cette saison",
                items: [{
                    label: "Karim Benzema",
                    img: "..//img/foot1.jpg",
                }, {
                    label: "Antoine Griezman",
                    img: "../img/foot2.jpg",
                }, {
                    label: "Eriksen",
                    img: "../img/foot3.jpg",
                },]
            }]
            localStorage.setItem("database", JSON.stringify(top))
        }

        // Réinitialise la page home
        var elements = document.getElementsByClassName("top-item");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        var elements2 = document.getElementsByClassName("no-top");
        while (elements2.length > 0) {
            elements2[0].parentNode.removeChild(elements2[0]);
        }

        if (localStorage.database) {
            // Affiche les éléments stockés dans le localStorage
            let database = JSON.parse(localStorage.database)
            var elements = []
            var titre = []
            var supp = []
            database.forEach((top, i) => {
                elements[i] = document.createElement("div")
                elements[i].setAttribute("class", "top-item")
                titre[i] = document.createElement("div")
                titre[i].setAttribute("class", "top-item-title")
                titre[i].innerHTML = top.title + ' >'
                supp[i] = document.createElement("div")
                supp[i].setAttribute("class", "top-item-supp")
                supp[i].setAttribute("id", "top-item-supp")
                supp[i].innerHTML = "x"
                supp[i].addEventListener("click", function () {
                    deleteTop(top.id)
                })
                elements[i].appendChild(titre[i])
                elements[i].appendChild(supp[i])
                titre[i].addEventListener("click", () => {
                    showTop(top.id)
                    $("#page2").removeClass("hidden")
                    $("#page1").addClass("hidden")
                    $("#page3").addClass("hidden")
                    $("#page4").addClass("hidden")
                })
                document.getElementById("body-page").appendChild(elements[i])
            })
        } else {
            var element = document.createElement("div")
            element.setAttribute("class", "no-top")
            element.innerHTML = "Cliquer sur le bouton + pour ajouter votre premier Top List."
            document.getElementById("body-page").appendChild(element)
        }
    }

    return { init }
})();

const showTop = (id) => {
    if (id) {
        localStorage.setItem("lastId", "" + id)
        setBodyToWhite()
        var tops = document.getElementById("top-items")
        var div = document.createElement("div")
        div.setAttribute("class", "top")
        var topItems = document.createElement("div")
        topItems.setAttribute("class", "topItems")

        let selectedTop = (JSON.parse(localStorage.database).filter(top => top.id === id))[0]
        var titreTop = null
        var descriptionTop = null
        var imagesContainer = []
        var images = []
        var titre = []
        titreTop = document.createElement("h2")
        descriptionTop = document.createElement("p")
        selectedTop.items && selectedTop.items.forEach((topItem, j) => {
            titre[j] = document.createElement("h2")
            titre[j].setAttribute("class", "mytop-item-title")
            titre[j].innerHTML = (j + 1) + ". " + topItem.label
            if (topItem.img) {
                imagesContainer[j] = document.createElement("div")
                imagesContainer[j].setAttribute("class", "mytop-item-image")
                images[j] = document.createElement("img")
                images[j].setAttribute("src", topItem.img)
                imagesContainer[j].appendChild(images[j])
            }
            topItems.appendChild(titre[j])
            topItem.img && topItems.appendChild(imagesContainer[j])
        })
        titreTop.innerHTML = selectedTop.title
        descriptionTop.innerHTML = selectedTop.description
        div.appendChild(titreTop)
        div.appendChild(descriptionTop)
        selectedTop.items && div.appendChild(topItems)

        tops.appendChild(div)
    }
}

TOP.init()