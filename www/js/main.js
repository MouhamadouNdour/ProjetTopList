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

        document.body.classList.remove("bg-white");
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
    document.body.classList.add("bg-white")
}

const setBodyToDefault = () => {
    document.body.classList.remove("bg-white")
}