$("figure").hover(                              // when hovering over a figure overlays figcaption and link to project
    function(){
    $(this).children("figcaption").css({        // targets figcaption of figure parent to set display, height, and width
        "display": "block",
        "height": $(this).children("img").height(), //sets height to image height
        "width": $(this).children("img").width(),   //sets width to image width
    });
    }, function(){
    $(this).children("figcaption").css("display", "none"); //hides overlay on hover
});
