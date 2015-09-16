$(function () {
  var winners = [
    ['c1','c2','c3','c4','c5'], //server
    ['e1','e2','e3','e4','e5'], //loan coord
    ['b1','b2','b3','b4','b5'], //scribe
    ['a1','b2','c3','d4','e5'] //web dev
  ];
  var totalCards = 4;
  var currentCard = 1;
  var clicked = [];
  var possibleWins = winners[currentCard - 1].length;
  var isDisplaying = false;

  function emptyCells(){
    $(".bizingo-cell").css("background-image","none");
    clicked = [];
  }

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

  function checkWinner(thisVal){
    clicked.push($(thisVal).attr('id'));

    var winCell = 0;
    if($.inArray($(thisVal).attr("id"),winners[currentCard - 1]) > -1){
      $(thisVal).css("background-image","url('http://www.wpclipart.com/education/gold_stars/circle_star_gold_T.png')");
    } else {
      $(thisVal).css("background-image","url('http://www.iconsdb.com/icons/preview/gray/circle-xxl.png')");
    }

    for(var i = 0; i < possibleWins; i++){
      if($.inArray(winners[currentCard - 1][i], clicked) > -1) {
        winCell++;
      }

      if(winCell === 5) {
        displayOverlay();
      }
    }
  }

  function displayOverlay(){
    $(".bizingo-cell").toggleClass("flip");
    $(".overlay").fadeTo("slow", 0.3,function(){
      $(".overlay").css("visibility","visible");
    }).fadeTo('slow',15);
    winCell = 0;
    clicked = [];
  }

  function closeOverlay(){
    $(".close-window").click(function(){
      $(".overlay").fadeTo("slow", 0.3,function(){
        $(".overlay").css("visibility","hidden");
      }).fadeTo('slow',15);
      $(".bizingo-cell").toggleClass("flip").css("background-image","none");
    })
  }

  $("#card" + currentCard).show();
  closeOverlay();


  $('.bizingo-cell').click(function(){
    checkWinner(this);
  });

  $("#right").click(function(){
    $("#card" + currentCard).hide("slide",{},400,slideLeft);
    emptyCells();
  })

  $("#left").click(function(){
    $("#card" + currentCard).hide("slide",{direction:"right"},400,slideRight);
    emptyCells();
  })
});
