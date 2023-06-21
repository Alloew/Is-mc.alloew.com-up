var load = document.getElementById("load");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var imgElem = document.getElementById("icon");
var current = document.getElementById("playerNum");
var max = document.getElementById("maxPlayers");
var motd = document.getElementById("motd");
var p = document.getElementById("preview");

function getStatus() {
    var url = "https://api.mcstatus.io/v2/status/java/mc.alloew.com";
    fetch(url).then((res) => {
        res.json().then((json) => {
            if (json.online == true) {
                load.style.display = "none";
                yes.style.display = "flex";
                no.style.display = "none";
                p.style.display = "flex";

                imgElem.src = json.icon;

                current.innerText = json.players.online;
                max.innerText = json.players.max;

                motd.innerHTML = json.motd.html;

                if (json.players.current > 0){
                    var players = json.players.list;
                }
            }
            else{
                load.style.display = "none";
                yes.style.display = "none";
                no.style.display = "flex";
            }
            window.setTimeout(getStatus, 2500);
        });
    });
}

getStatus();