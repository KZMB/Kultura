$(document).ready(function() {
    var shows = $("div.event");
    for (var i=0; i<shows.length; i++)
    {
        var show = shows[i];
        var expiryString = show.getAttribute("data-expires");
        if (!expiryString) {
            continue;
        }

        var expiryParts = expiryString.split("/");
        if (expiryParts.length != 3) {
            console.log("Wrong expiry date format: " + expiryString);
            continue;
        }

        var expiryDate = new Date(expiryParts[2], expiryParts[1]-1, expiryParts[0]);
        if (!expiryDate) {
            console.log("Could not parse date: " + expiryString);
            continue;
        }

        var currentDate = new Date();
        if (expiryDate.getTime() < currentDate.getTime()) {
            $(show).hide();
        }
    }
});
