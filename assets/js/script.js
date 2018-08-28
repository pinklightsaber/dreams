$(function() {

	 
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
            $(".bg").css('opacity', '0.5'); //*Transparente
        }         
    });

    $('li a').on({
    	mouseenter: function(){
    		$(this).removeClass('gray');
    	},
    	mouseleave: function(){
    		$(this).addClass('gray');
    	}});

  var lastId,
    topMenu = $("#top-navigation"),
    topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var href = $(this).attr("href");
            if(href.indexOf("#") === 0){
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            }
        });

        



  
});
