function isShowExpired(show, referenceDate)
{
    referenceDate = referenceDate || new Date();

    var expiryString = show.getAttribute("data-expires");
    if (!expiryString) {
        return false;
    }

    var expiryParts = expiryString.split("/");
    if (expiryParts.length != 3) {
        console.log("Wrong expiry date format: " + expiryString);
        return false;
    }

    var expiryDate = new Date(expiryParts[2], expiryParts[1]-1, expiryParts[0]);
    if (!expiryDate) {
        console.log("Could not parse date: " + expiryString);
        return false;
    }

    return (expiryDate.getTime() < referenceDate.getTime());
}

function hideAllExpiredShows()
{
    $('div.event').each(function() {
        if (isShowExpired(this)) {
            $(this).hide();
        }
    });
}

function updateBannerPosition()
{
    var banner = $('.event-banner').first();
    var firstVisibleShow = $('.event').not(":hidden").first()
    firstVisibleShow.after(banner);
}

$(document).ready(function() {
    hideAllExpiredShows();
    updateBannerPosition();
});
