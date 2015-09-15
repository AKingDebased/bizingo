$(function () {
  // var winners = [
  //   ['a1','a2','a3','a4','a5'],
  //   ['b1','b2','b3','b4','b5'],
  //   ['c1','c2','c3','c4','c5'],
  //   ['d1','d2','d3','d4','d5'],
  //   ['e1','e2','e3','e4','e5'],
  //   ['a1','b1','c1','d1','e1'],
  //   ['a2','b2','c2','d2','e2'],
  //   ['a3','b3','c3','d3','e3'],
  //   ['a4','b4','c4','d4','e4'],
  //   ['a5','b5','c5','d5','e5'],
  //   ['a1','b2','c3','d4','e5'],
  //   ['a5','b4','c3','d2','e1']
  // ];

  var winners = [{name: "restaurant and cafe server", winner: ['c1','c2','c3','c4','c5']}];
  var clicked = [];
  var possibleWins = winners[0].winner.length;
  var totalCards = 4;
  var currentCard = 1;

  function slideLeft(){
    currentCard++;
    currentCard = currentCard > totalCards ? 1 : currentCard;
    $("#card" + currentCard).show("slide",{direction:"right"});
  }

  function slideRight(){
    currentCard--;
    currentCard = currentCard < 1 ? totalCards : currentCard;
    $("#card" + currentCard).show("slide",{direction:"left"});
  }

  $("#card" + currentCard).show();

  $('.bizingo-cell').click(function(){
    $(this).css("background-size","45px");
    $(this).css("background-repeat","no-repeat");
    clicked.push($(this).attr('id'));

    var winCell = 0;

    if($.inArray($(this).attr("id"),winners[0].winner) > -1){
      $(this).css("background-image","url('http://www.wpclipart.com/education/gold_stars/circle_star_gold_T.png')");
    } else {
      $(this).css("background-image","url('http://www.iconsdb.com/icons/preview/gray/circle-xxl.png')");
    }

    for(var i = 0; i < possibleWins;
      i++){
        if($.inArray(winners[0].winner[i], clicked) > -1) {
          winCell++;
        }

        if(winCell === 5) {
          $(".bizingo-cell").toggleClass("flip");
          $(".overlay").fadeTo("slow", 0.3,function(){
            $(".overlay").css("visibility","visible");
          }).fadeTo('slow',15);
          winCell = 0;
          clicked = [];
        }
      }
    })

    $(".close-window").click(function(){
      $(".overlay").fadeTo("slow", 0.3,function(){
        $(".overlay").css("visibility","hidden");
      }).fadeTo('slow',15);

      $(".bizingo-cell").toggleClass("flip").css("background-image","none");
    })

    $("#right").click(function(){
      $("#card" + currentCard).hide("slide",{},400,slideLeft);
    })

    $("#left").click(function(){
      $("#card" + currentCard).hide("slide",{direction:"right"},400,slideRight);
    })
  });
