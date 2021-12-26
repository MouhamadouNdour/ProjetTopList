const switchTheme = (e) => {
    console.log(e)
    if (e.target.checked) {
        console.log("data-theme : dark")
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        console.log("data-theme : light")
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

const currentTheme = localStorage.getItem("theme");
var themeCheckbox = document.getElementById("theme-checkbox");
themeCheckbox.addEventListener("click", switchTheme, false)
// Si le th&egrave;me n&rsquo;a pas &eacute;t&eacute; trouv&eacute;
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        themeCheckbox.checked = true;
    }

}

const addTop = (e) => {
    var inputTitre = document.getElementById("inputTitre").value;
    var inputDescription = document.getElementById("inputDescription").value;

    if (inputTitre !== "" && inputDescription !== "") {

        var newTop = {
            title: inputTitre,
            description: inputDescription,
        }

        if (localStorage.database) {
            var currentDatabase = JSON.parse(localStorage.database);
            currentDatabase.push(newTop);
            localStorage.setItem("database", JSON.stringify(currentDatabase));
        } else {
            var newDatabase = [];
            newDatabase.push(top);
            localStorage.setItem("database", JSON.stringify(newDatabase));
        }

        document.body.classList.remove("m-bg-theme");
        TOP.init()
        $("#page1").removeClass("hidden");
        $("#page2").addClass("hidden");
        $("#page3").addClass("hidden");
        $("#page4").addClass("hidden");
    } else {
        console.log("Veuillez remplir tous les champs.")
    }
}

const setBodyToWhite = () => {
    document.body.classList.add("m-bg-theme")
}

const setBodyToDefault = () => {
    document.body.classList.remove("m-bg-theme")
}