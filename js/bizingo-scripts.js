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


      if($(this).attr("id") === "e4"){
        $(this).wrap("<a title='Heating, Ventilation, & Air Conditioning licensed contractors are certified to install, repair, and maintain any and all varieties of heaters, ventilators, air conditioning units, and all other associated properties.'></a>");
      }

      if($(this).attr("id") === "e5"){
        $(this).wrap("<a title='Simply put, Javascript is the programming language of the internet.  Primarily used in web development, it powers almost all interactive functionality on all web sites, big or small.'></a>");
      }
    }

    if(currentCard === 3){
      if($(this).attr("id") === "a1"){
        $(this).wrap("<a title='Asynchronous Javascript and XML is a group of interconnected web development techniques that allow web clients to exchange data with a server and update parges of a web page without reloading the entire page.  Consider GMail, which allows you to browse your inbox while composing an email in a pop up window.'></a>");
      }

      if($(this).attr("id") === "c1"){
        $(this).wrap("<a title='Obstetrics and gynecology is the medical speciality that deals with pregnancy, childbirth, and care of the female reproductive systems.'></a>");
      }

      if($(this).attr("id") === "c3"){
        $(this).wrap("<a title='Photoshop, Illustrator, and InDesign are all part of the Adobe software suite.  Each program contributes something to the design workflow, be it image editing, digital painting, or digital design layouts.'></a>");
      }

      if($(this).attr("id") === "c4"){
        $(this).wrap("<a title='HyperText Markup Language is the de facto markup language of the internet.  Web browsers are able to read HTML files and render them into visible or audible web pages.  Cascading Style Sheets is a style sheet language used for the presentation of a document, including color, size, and positioning.'></a>");
      }

      if($(this).attr("id") === "c5"){
        $(this).wrap("<a title='A valid Environmental Protection Agency refrigerant recycling certification qualifies a contractor to work with refrigerant chemicals, such as those found in air conditioners and kitchen fridges.'></a>");
      }

      if($(this).attr("id") === "d1"){
        $(this).wrap("<a title='MedNet & Epic/CareConnect are all electronic health record programs that allow users to access, manipulate, and store inpatient and outpatient clinical records.'></a>");
      }

      if($(this).attr("id") === "d2"){
        $(this).wrap("<a title='Structured Query Language, i.e. SQL, is a programming language used for writing data to and accessing from databases.'></a>");
      }

      if($(this).attr("id") === "d5"){
        $(this).wrap("<a title='Maya is a 3D animation and modeling program used to create full-motion effects, be it for film, video games, or otherwise.'></a>");
      }

      if($(this).attr("id") === "e2"){
        $(this).wrap("<a title='Federal Housing Accessibility and Housing Accesibility Guidelines are federal statutes that dictate the protocols to be followed for handicap accesibility in any given establishment or building.'></a>");
      }
    }

    if(currentCard === 4){
      if($(this).attr("id") === "e2"){
        $(this).wrap("<a title='Heating, Ventilation, & Air Conditioning licensed contractors are certified to install, repair, and maintain any and all varieties of heaters, ventilators, air conditioning units, and all other associated properties.'></a>");
      }

      if($(this).attr("id") === "c5"){
        $(this).wrap("<a title='Human Capital Management is an approach to employee staffing that views people as assets (i.e. human capital) whose value can be measured and whose future value can be increased through investment.'></a>");
      }

      if($(this).attr("id") === "e3"){
        $(this).wrap("<a title='Master&#39;s Degree in Nursing.  This is a step above registered nursing, and opens more career opportunities with higher salaries.  Not to be confused with the Microsoft Network.'></a>");
      }

      if($(this).attr("id") === "d5"){
        $(this).wrap("<a title='The LAMP stack is a popular open source web platform used to run dynamic web sites and servers.  The name comes from its use of Linux, Apache server software, MySQL, and PHP/Python/Perl/whatever other serverside language of choice.'></a>");
      }

      if($(this).attr("id") === "c4"){
        $(this).wrap("<a title='Adobe AfterEffects is a video editing software used for compositing, motion graphics design, and animation.  It can be used in close conjunction with Cinema 4D, a 3D modeling service that can be used to for texturing, rendering, and lighting in a 3D environment.'></a>");
      }

      if($(this).attr("id") === "a3"){
        $(this).wrap("<a title='Photoshop and Illustrator are part of the Adobe software suite.  Each program contributes something to the design workflow, be it image editing or digital painting.'></a>");
      }

      if($(this).attr("id") === "e4"){
        $(this).wrap("<a title='An Application Programming Interface is a set of routines and protocols used for building software applications, almost like an instruction manual.  An API based web app executes most of its functionality through the use of an API. This allows for functionality to be cross-compatible across phones, tablets, desktops, and otherwise.'></a>");
      }
    }

    if(currentCard === 5){
      if($(this).attr("id") === "a3"){
        $(this).wrap("<a title='HyperText Markup Language allows web browsers to read HTML files and display content.  HTML is one of the languages used in web design, as it allows the developer to render content in a browser.'></a>");
      }

      if($(this).attr("id") === "a4"){
        $(this).wrap("<a title='Structured Query Language, i.e. SQL, is a programming language used for writing data to and accessing from databases.'></a>");
      }

      if($(this).attr("id") === "a5"){
        $(this).wrap("<a title='Linux is an entirely open source computer operating system developed by Linus Torvalds in 1991.  It is one of the most popularly used operating systems, along with Mac OS and Windows, and it features prominently in the LAMP development stack.'></a>");
      }

      if($(this).attr("id") === "c3"){
        $(this).wrap("<a title='Illustrator and InDesign are part of the Adobe software suite.  Each program contributes something to the design workflow, be it digital painting or digital design layouts.'></a>");
      }

      if($(this).attr("id") === "c5"){
        $(this).wrap("<a title='Obstetrics and gynecology is the medical speciality that deals with pregnancy, childbirth, and care of the female reproductive systems.'></a>");
      }

      if($(this).attr("id") === "d1"){
        $(this).wrap("<a title='The List Processor langauge (LISP) is one of the oldest programming languages in the industry.  Originally conceived as a practical mathematical notation for computer programs, it has helped pioneered many pillars of computer science, such as tree data structures, conditionals, and higher order functions.'></a>");
      }

      if($(this).attr("id") === "d5"){
        $(this).wrap("<a title='Epic Systems is a healthcare software designed to hold hospital medical records. As of 2015, Epic Systems records over 54% of patient data in the US.'></a>");
      }

      if($(this).attr("id") === "d5"){
        $(this).wrap("<a title='Epic Systems is a healthcare software designed to hold hospital medical records. As of 2015, Epic Systems records over 54% of patient data in the US.'></a>");
      }

      if($(this).attr("id") === "e1"){
        $(this).wrap("<a title='Representational State Transfer is the underlying architectural principle of the web.  Simply put, it dictates that clients (i.e. browers) can interact with servers without needing to know anything beforehand about the server and the resources it contains.'></a>");
      }

      if($(this).attr("id") === "e4"){
        $(this).wrap("<a title='MedNet & EPIC/CareConnect are all electronic health record programs that allow users to access, manipulate, and store inpatient and outpatient clinical records.'></a>");
      }
    }

    if(currentCard === 6){
      if($(this).attr("id") === "a1"){
        $(this).wrap("<a title='3D level editors are applications which can be used to develop 3D environments, be it for films, video games, or otherwise.  Some examples include Maya, Unity3D, and Unreal Engine 4.'></a>");
      }

      if($(this).attr("id") === "b1"){
        $(this).wrap("<a title='C# (pronounced &#39;see&#39;-&#39;sharp&#39;) is a multi-paradigm programming language developed by Microsoft for use within their .NET framework.  It is commonly used in Windows applications, as well as a scripting language in video game engines.'></a>");
      }

      if($(this).attr("id") === "b2"){
        $(this).wrap("<a title='Maya is a 3D animation and modeling program used to create full-motion effects, be it for film, video games, or otherwise.'></a>");
      }

      if($(this).attr("id") === "b5"){
        $(this).wrap("<a title='PHP, which (weirdly) stands for Hypertext Preprocessor, is a programming language that is primarily used for server side scripting (as opposed to front end web design).'></a>");
      }

      if($(this).attr("id") === "c4"){
        $(this).wrap("<a title='AutoCAD is a commercial software application for 2D and 3D computer-aided design (CAD).  It is primarily used by architects, project managers, graphic designers, and other professionals interested in drafting up plans, blueprints, and other such designs.'></a>");
      }

      if($(this).attr("id") === "d4"){
        $(this).wrap("<a title='Game scripting is programming specifically in the context of video game behavior and functionality.  Many languages can be used for this purpose, including but not limited to Python, C#, Javascript, and C++.'></a>");
      }

      if($(this).attr("id") === "e4"){
        $(this).wrap("<a title='Autodesk is the software company behind such 3D design programs as Maya and 3ds Max.'></a>");
      }
    }

    if(currentCard === 7){
      if($(this).attr("id") === "a1"){
        $(this).wrap("<a title='MailChimp and Sailthru are web based email marketing services that allow users to send email newsletters, invitations, reminders, and more to a list of subscribers.'></a>");
      }

      if($(this).attr("id") === "a3"){
        $(this).wrap("<a title='Google Partners are online marketing companies who have been entrusted by Google with the use of their products.  They are stamped with Google's approval for adhering to Google's system of best practices. '></a>");
      }

      if($(this).attr("id") === "b1"){
        $(this).wrap("<a title='The Wordpress content management system allows for websites to be created, updated, and maintained through an intuitive, database system.'></a>");
      }

      if($(this).attr("id") === "b5"){
        $(this).wrap("<a title='Business to Consumer eCommerce refers to online transactions between businesses and consumers, as opposed to transactions between businesses (B2B). It is essentially the online equivalent of a retail store; consider the example of Amazon, a prominent B2C eCommerce website.'></a>");
      }

      if($(this).attr("id") === "c1"){
        $(this).wrap("<a title='Simply put, Javascript is the programming language of the internet.  Primarily used in web development, it powers almost all interactive functionality on all web sites, big or small.'></a>");
      }

      if($(this).attr("id") === "c2"){
        $(this).wrap("<a title='Search engine optimization focuses on optimizing website or page visiblity through unpaid results - that is, the results that show up in a typical, organic search.'></a>");
      }

      if($(this).attr("id") === "c5"){
        $(this).wrap("<a title='The ASP.NET markup language is designed for the creation of web applications.  It allows for server based code to be generated into dynamic web content on the fly.'></a>");
      }

      if($(this).attr("id") === "d3"){
        $(this).wrap("<a title='Java (not to be confused with Javascript) is one of the most popular programming languages in the world.  It has seen use in games, web applications, and enterprise programming.'></a>");
      }

      if($(this).attr("id") === "d4"){
        $(this).wrap("<a title='The Adobe Creative Suite is a collection of Adobe applications that contains, but is not limited to, Photoshop, Acrobat, InDesign, and After Effects.'></a>");
      }

      if($(this).attr("id") === "e1"){
        $(this).wrap("<a title='HyperText Markup Language is the de facto markup language of the internet.  Web browsers are able to read HTML files and render them into visible or audible web pages.'></a>");
      }

      if($(this).attr("id") === "e2"){
        $(this).wrap("<a title='Google Webmaster Tools allow webmasters (individuals who run and maintain web servers) to check the indexing status and visibility of their websites in Google search results.'></a>");
      }

      if($(this).attr("id") === "e3"){
        $(this).wrap("<a title='The model-view-controller software design pattern allows the developer to compartmentalize a software application into three distinct parts, being the model (stores data that can be retrieved from the controller), the view (generates the output to the user), and the controller (sends commands to the model to update the model&#39;s state).'></a>");
      }

      if($(this).attr("id") === "e4"){
        $(this).wrap("<a title='iOS (the iPhone&#39;s operating system) and Android come with their own APIs for developing apps on either device.'></a>");
      }

      if($(this).attr("id") === "a4"){
        $(this).wrap("<a title='QuickBooks is an accounting software package geared towards small and medium-sized businesses.'></a>");
      }

      if($(this).attr("id") === "a5"){
        $(this).wrap("<a title='C++ is a general-purpose programming language developed by Bjarne Stroustrup in 1983.  It is primarily used in high-speed, performance-critical environments, such as desktop applications, NASA space probes, and stock market transaction systems.'></a>");
      }

      if($(this).attr("id") === "c4"){
        $(this).wrap("<a title='Conversion optimization is a system for increasing the percentage of visitors to a website that convert into customers or, more generally, users that take any desired action on a given webpage.'></a>");
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
      $(thisVal).css("background-image","url('http://i.imgur.com/HxoNp1D.png')");
    } else {
      $(thisVal).css("background-image","url('http://i.imgur.com/azJEyr9.png')");
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
