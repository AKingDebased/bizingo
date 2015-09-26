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

  $(document).tooltip({
    track: true
  });

  $(".bizingo-cell").hover(function(){
    if(currentCard === 1){
      if($(this).attr("id") === "b1"){
        $(this).wrap("<a title='Adobe Dreamweaver is a web development tool that combines a visual interface with standard code editor features.'></a>");
      }

      if($(this).attr("id") === "b5"){
        $(this).wrap("<a title='Scrum is a software development model based around multiple small teams working in an interdependent manner.  Its strength lies in cross functional teams that collaborate together for maximum effectiveness and flexibility.'></a>");
      }

      if($(this).attr("id") === "d3"){
        $(this).wrap("<a title='Search engine optimization focuses on optimizing website or page visiblity through unpaid results - that is, the results that show up in a typical, organic search.  Search engine marketing, on the other hand, looks to increase site or page visibility through paid advertising.'></a>");
      }

      if($(this).attr("id") === "d4"){
        $(this).wrap("<a title='Representational State Transfer is the underlying architectural principle of the web.  Simply put, it dictates that clients (i.e. browers) can interact with servers without needing to know anything beforehand about the server and the resources it contains.'></a>");
      }
    }

    if(currentCard === 2){
      if($(this).attr("id") === "a1"){
        $(this).wrap("<a title='HyperText Markup Language is the de facto markup language of the internet.  Web browsers are able to read HTML files and render them into visible or audible web pages.  Cascading Style Sheets is a style sheet language used for the presentation of a document, including color, size, and positioning.'></a>");
      }

      if($(this).attr("id") === "b5"){
        $(this).wrap("<a title='Asynchronous Javascript and XML is a group of interconnected web development techniques that allow web clients to exchange data with a server and update parges of a web page without reloading the entire page.  Consider GMail, which allows you to browse your inbox while composing an email in a pop up window.'></a>");
      }

      if($(this).attr("id") === "c4"){
        $(this).wrap("<a title='jQuery is a cross-platform Javascript library designed with client-side HTML scripting in mind. It is primarily used in front-end web development, and it is the single most popular Javascript library in use today, with installation on over 65% of the 10 million highest-trafficked sites on the web.'></a>");
      }
    }
  });




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
});
