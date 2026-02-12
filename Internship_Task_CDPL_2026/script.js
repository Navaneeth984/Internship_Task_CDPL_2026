
let altitude = 100;
let speed = 10;
let battery = 100;
let lat = 28.6139;
let lon = 77.2090;

let seconds = 0;

function updateTelemetry() {
    if (seconds >= 30) return;

    altitude += (Math.random() * 3 - 1.5);
    speed += (Math.random() * 1.5 - 0.5);
    battery -= (Math.random() * 0.5);
    lat += (Math.random() * 0.0002 - 0.0001);
    lon += (Math.random() * 0.0002 - 0.0001);

    document.getElementById("altitude").innerText = altitude.toFixed(2) + " m";
    document.getElementById("speed").innerText = speed.toFixed(2) + " m/s";
    document.getElementById("battery").innerText = battery.toFixed(2) + " %";
    document.getElementById("gps").innerText =
        "(" + lat.toFixed(5) + ", " + lon.toFixed(5) + ")";

    seconds++;
}

setInterval(updateTelemetry, 1000);
