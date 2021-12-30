function onBatteryStatus(status) {
    console.log("Battery Level Low " + status.level + "%");
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
    document.addEventListener("deviceready", function () {

        window.open = cordova.InAppBrowser.open;
        cordova.InAppBrowser.open(link, "_self", openInAppBrowserOptions);

    }, false);
};

const toogleModalOffline = (show) => {
    const modal = document.getElementById("modal-unconnect");
    modal.className = show ? "show" : "";
};

const onConfirm = (buttonIndex, id) => {
    if (buttonIndex === 1) {
        var database = JSON.parse(localStorage.database)
        var newDatabase = database.filter(top => top.id !== id)
        localStorage.setItem("database", JSON.stringify(newDatabase))
        if (localStorage.lastId && parseInt(localStorage.lastId) === id) {
            localStorage.removeItem("lastId")
        }
        if (localStorage.database && (JSON.parse(localStorage.database)).length === 0) {
            localStorage.removeItem("database")
        }
        returnHome()
    }
}

function alertDismissed() {
}

const deleteTop = (id) => {
    if ("cordova" in window) {
        if (id === 1) {
            navigator.notification.alert("Suppression de top List impossible !", alertDismissed, "Attention")
        } else {
            navigator.notification.confirm("Êtes-vous sûr de vouloir supprimer ce Top List ?", (choice) => onConfirm(choice, id), "Suppression", ['Oui', 'Annuler'])
        }
    } else {
        if (id === 1) {
            alert("Suppression de top List impossible !")
        } else {
            onConfirm(1, id)
        }
    }
}

const deviceReady = () => {
    window.screen.orientation.lock('portrait-primary');
    console.log('Orientation is ' + screen.orientation.type);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }
    window.addEventListener("orientationchange", function () {
        console.log(screen.orientation.type);
    });
    function onOffline() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    function onOnline() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
};