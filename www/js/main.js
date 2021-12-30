const returnHome = () => {
    TOP.init();
    $("#page1").removeClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
}

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var inputNumber = (event.target.id).match(/\d+/)[0]
        localStorage.setItem(inputNumber, e.target.result);
    };

    reader.readAsDataURL(file);
}

let elem = 1
const currentTheme = localStorage.getItem("theme");
var themeCheckbox = document.getElementById("theme-checkbox");
themeCheckbox.addEventListener("click", switchTheme, false)

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        themeCheckbox.checked = true;
    }
}

// Ajouter un topList
const addTop = (e) => {
    var inputTitre = document.getElementById("inputTitre").value;
    var inputDescription = document.getElementById("inputDescription").value;
    var currentId = parseInt(localStorage.currentId) || 2
    var oldDatabase = JSON.parse(localStorage.getItem('database')) || [];

    if (inputTitre !== "" && inputDescription !== "") {
        var items = [];
        var titre = [];
        var file = [];

        for (var i = 0; i < elem; i++) {
            titre[i] = document.getElementById("inputTitreElem" + (i + 1)).value;
            file[i] = localStorage.getItem("" + (i + 1))

            if (file[i]) {
                file[i] = localStorage.getItem("" + (i + 1))
                localStorage.removeItem("" + (i + 1))
            }

            items.push({ label: titre[i], img: file[i] });
        }

        var newTop = {
            'id': currentId,
            'title': inputTitre,
            'description': inputDescription,
            'items': items
        }

        oldDatabase.push(newTop);
        localStorage.setItem("database", JSON.stringify(oldDatabase));

        document.body.classList.remove("m-bg-theme");
        returnHome()
        localStorage.setItem("currentId", "" + (currentId + 1))
    } else {
        console.log("Veuillez remplir tous les champs.");
    }
}

const addNewToList = () => {
    var listItem = document.createElement("div")
    listItem.setAttribute("class", "liste-item")

    var inputContainer1 = document.createElement("div")
    inputContainer1.setAttribute("class", "input-container")
    var inputLabel1 = document.createElement("label")
    inputLabel1.setAttribute("class", "input-label")
    inputLabel1.innerHTML = "Nom"
    var input1 = document.createElement("input")
    input1.setAttribute("class", "form-control")
    input1.setAttribute("type", "text")
    let newElem = elem + 1
    input1.setAttribute("id", "inputTitreElem" + newElem)
    input1.setAttribute("name", "titreElem" + newElem)
    // Ajout dans les noeuds
    inputContainer1.appendChild(inputLabel1)
    inputContainer1.appendChild(input1)
    listItem.appendChild(inputContainer1)

    var inputContainer2 = document.createElement("div")
    inputContainer2.setAttribute("class", "input-container")
    var inputLabel2 = document.createElement("label")
    inputLabel2.setAttribute("class", "input-label")
    inputLabel2.innerHTML = "Image"
    var input2 = document.createElement("input")
    input2.setAttribute("class", "form-control")
    input2.setAttribute("type", "file")
    input2.setAttribute("id", "inputFileElem" + newElem)
    input2.setAttribute("name", "fileElem" + newElem)
    input2.addEventListener("change", onChange)
    // Ajout dans les noeuds
    inputContainer2.appendChild(inputLabel2)
    inputContainer2.appendChild(input2)
    listItem.appendChild(inputContainer2)

    var listeMain = document.getElementById("liste-main")
    listeMain.appendChild(listItem)

    elem = elem + 1
}

const setBodyToWhite = () => {
    document.body.classList.add("m-bg-theme")
}

const setBodyToDefault = () => {
    document.body.classList.remove("m-bg-theme")
}