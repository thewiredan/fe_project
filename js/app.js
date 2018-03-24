$("figure").hover(
    function(){
    $(this).children("figcaption").css({
        "display": "inline-block",
        "height": "",
        "width": ""
      });
    }, function(){
    $(this).children("figcaption").css("display", "none");
});

