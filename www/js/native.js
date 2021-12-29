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

const deviceReady = () => {
    window.screen.orientation.lock('portrait');
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