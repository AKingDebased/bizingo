$(function () {
  var winners = [
    ['c1','c2','c3','c4','c5'], //server
    ['a1','b2','c3','d4','e5'], //web dev
    ['e1','e2','e3','e4','e5'], //loan coord
    ['b1','b2','b3','b4','b5'], //scribe
    ['a3','b3','c3','d3','e3'], //digital designer
    ['a1','b2','c3','d4','e5'], //game designer
    ['a1','b1','c1','d1','e1'] //web producer
  ];
  var totalCards = 7;
  var currentCard = 1;
  var clicked = [];
  var possibleWins = winners[currentCard - 1].length;
  var isDisplaying = false;

  $("<div></div>").css({
    height:"100px",
    width:"350px",
    backgroundColor:"white",
    border:"3px solid black",
    position:"absolute",
    left:"100px",
    top:"100px",
    borderRadius:"10px"
  }).appendTo("body");

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
    isDisplaying = true;
  }

  function closeOverlay(){
    $(".overlay").fadeTo("slow", 0.3,function(){
      $(".overlay").css("visibility","hidden");
    }).fadeTo('slow',15);
    $(".bizingo-cell").toggleClass("flip").css("background-image","none");
    isDisplaying = false;

  }

  $("#card" + currentCard).show();
  $(".close-window").click(closeOverlay);


  $('.bizingo-cell').click(function(){
    checkWinner(this);
  });

  $("#right").click(function(){
    $("#card" + currentCard).hide("slide",{},400,slideLeft);
    emptyCells();
    if(isDisplaying){
      closeOverlay();
    }
  })

  $("#left").click(function(){
    $("#card" + currentCard).hide("slide",{direction:"right"},400,slideRight);
    emptyCells();
    if(isDisplaying){
      closeOverlay();
    }
  })

  function dislayDefinition(){

  }

});
