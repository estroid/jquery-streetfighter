$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    })

});

// // Ryu to switch to his "looking cool" pose when the user presses the “x” key. When the user releases “x”, Ryu should go back to standing still.
// hints: when you use the keydown method, you need to check to see if the key that the user pressed down is the specific one you’re looking for. The key code for “x” is 88.

    $(document).keydown(function(event) {
        if (event.keyCode == 88) {
            console.log('and');
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
      }
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


