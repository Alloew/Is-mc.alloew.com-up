var load = document.getElementById("load");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var imgElem = document.getElementById("icon");
var current = document.getElementById("playerNum");
var max = document.getElementById("maxPlayers");
var motd = document.getElementById("motd");
var p = document.getElementById("preview");
var players = document.getElementById("playersList");

function getStatus() {
    var url = "https://api.mcstatus.io/v2/status/java/gw.alloew.com";
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

                var tempHTML = "";

                if (json.players.online > 0) {
                    tempHTML += "<h3 class='playersTitle'>Players:</h3>";
                    var playersL = json.players.list;
                    for (var i = 0; i < playersL.length; i++) {
                        tempHTML += playersL[i].name_html;
                    }
                    console.log(tempHTML);
                    players.innerHTML = tempHTML;
                }
            }
            else {
                load.style.display = "none";
                yes.style.display = "none";
                no.style.display = "flex";
            }
            window.setTimeout(getStatus, 2500);
        });
    });
}

getStatus();