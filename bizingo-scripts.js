$(function () {
  function restaurantCafeServer(){

  }
  
  var winners = [
    ['a1','a2','a3','a4','a5'],
    ['b1','b2','b3','b4','b5'],
    ['c1','c2','c3','c4','c5'],
    ['d1','d2','d3','d4','d5'],
    ['e1','e2','e3','e4','e5'],
    ['a1','b1','c1','d1','e1'],
    ['a2','b2','c2','d2','e2'],
    ['a3','b3','c3','d3','e3'],
    ['a4','b4','c4','d4','e4'],
    ['a5','b5','c5','d5','e5'],
    ['a1','b2','c3','d4','e5'],
    ['a5','b4','c3','d2','e1']
  ];
  var clicked = [];
  var possibleWins = winners.length;

  $('.bizingo-cell').click(function(){
    $(this).css("background-image","url('http://www.wpclipart.com/education/gold_stars/circle_star_gold_T.png')");
    $(this).css("background-size","45px");
    $(this).css("background-repeat","no-repeat");
    clicked.push($(this).attr('id'));

    for(var i = 0; i < possibleWins; i++) {
      var winCell = 0;

      for(var j = 0; j < 5; j++) {
        if($.inArray(winners[i][j], clicked) > -1) {
          winCell++;
        }
      }

      if(winCell === 5) {
        $(".bizingo-cell").toggleClass("flip");
      }
    }
  });
});
