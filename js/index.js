<button id="expand-btn" class="btn btn-primary btn-circle">
  +
</button>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    $('#expand-btn').click(function() {
      $(this).animate({
        width: '200px',
        'border-radius': '50px'
      }, 500, function() {
        $(this).text('Great Choice!').css('font-size', '20px');
        setTimeout(function() {
          $('#expand-btn').animate({
            width: '50px',
            'border-radius': '50%'
          }, 500, function() {
            $(this).text('-').css('font-size', '30px');
          });
        }, 1500);
      });
    });
  });
</script>
