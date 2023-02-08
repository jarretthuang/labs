
$(document).ready(function(){
   $(".view-switcher-button").on( "click", function() {
    const shouldSwitch = !$(this).hasClass("selected");
    if (shouldSwitch) {
        $(".view-switcher-button").each(function() {
            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
            } else {
                $(this).addClass("selected");
            }
        });
    }
  });
});
