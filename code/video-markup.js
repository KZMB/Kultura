$('document').ready(function() {
    $('a[href*="youtu"] img').each(function() {
        var elem = $(this);
        var imageURL = elem.attr('src');
        elem.wrap('<div class="thumbnail"></div>');
        elem.removeClass('img-thumbnail');
        elem.css('background', 'url(' + imageURL + ')');
        elem.css('background-size', 'cover');
        elem.attr('src', '/img/video.png');
    });
});
