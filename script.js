
window.onload = function() {
    
    let links = [
        "https://canadian-united.media/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://downloadramdownloadramdownloadram.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://papertoilet.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://codepen.io/ge1doot/full/WbWQOP/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://trypap.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://isitchristmas.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.ouaismaisbon.ch/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.koalastothemax.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://make-everything-ok.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://rulesoftheinternet.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://ninjaflex.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://internet-map.net/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.plspetdoge.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://faceofdisapproval.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.kamogo.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://eelslap.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.freechocolate.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.woot.co.uk/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.howmanypeopleareinspacerightnow.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.cowsgomoo.co.uk/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.clicktoremove.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.tomscott.com/usvsth3m/maths/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://nothingeverhappens.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://drumsound.net/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://froggytime.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.youareinaforest.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://clickingbad.nullism.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://onetinyhand.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://corndogoncorndog.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.omfgdogs.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.sheepfilms.co.uk/gifs?pgid=kctc5nrd-afad6bc9-f898-4c06-83df-4ebd2de83b0f",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://www.rrrather.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "https://bouncingdvdlogo.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.cachemonet.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://randomcolour.com/",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://www.slightlyinteresting.com/lavalamp/lava.asp",
        "https://youtu.be/dQw4w9WgXcQ",
        "http://kryall.duckdns.org:5000/",
        "http://conceptlab.com/simulator/morning/clock800.html",
        "https://youtu.be/dQw4w9WgXcQ"
    ]
    window.location.href = links[Math.floor(Math.random() * links.length)];
}
