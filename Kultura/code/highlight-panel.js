// Zvýrazní div.panel, který má id odpovídající
// #kotvě v URL dokumentu, a nascrolluje na něj.
$(document).ready(function() {
    var hash = document.location.hash;
    if (hash) {
        var panelID = hash.substring(1);
        var panels = $("div.panel");
        for (var i=0; i<panels.length; i++) {
            if (panels[i].getAttribute("id") == panelID) {
                $(panels[i]).addClass("panel-primary");
                var offset = $(panels[i]).offset();
                $("html,body").animate({
                    scrollTop: offset.top - 50
                });
                break;
            }
        }
    }
});
