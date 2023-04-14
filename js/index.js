$(document).ready(function() {
    var button = $('.bailey');
    
    button.click(function() {
      button.text("Great choice"); // set the button text to a plus symbol
        setTimeout(function() {
          button.text("-"); // change the button text again to a minus symbol after another short delay
        }, 1000)
    });
  });

  $(document).ready(function() {
    $(".bailey").click(function(e){
        e.preventDefault();
        var link = $(this);
        link.text('Great Choice!');
        link.addClass('extended')
        setTimeout(function(){
            link.text('-')
            link.removeClass('extended');
        },2000);
    });
});