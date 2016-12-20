$(document).ready(function(){
  /* selectors */
  /*
    var header = $("#lead-banner p");
    $("h3").css({border: "3px solid blue"});
    $(".wrapper").css({border: "3px solid red"});
    $("#clients").css({border: "3px solid yellow"});
  */

  /* first element and last element */
  /*
    $("header nav li:first").css({border: "2px solid red"});
    $("header nav li:last").css({border: "2px solid red"});
  */

  /* first child and last child */
  /*
    $("#contact ul:first-child").css({border: "2px solid red"});
    $("#contact ul:last-child").css({border: "2px solid red"});
  */

  /* even */
  /*
    $("header nav li:even").css({border: "2px solid blue"});
  */

  /* odd */
  /*
    $("header nav li:odd").css({border: "2px solid white"});
  */

  /* not */
  /*
    $("section:not('#contact')").css({border:"2px solid green"});
  */

  /* less than*/
  /*
    $("#social-nav li:lt(3)").css({border: "2px solid green"});
  */

  /* greater than*/
  /*
     $("#social-nav li:gt(2)").css({border: "2px solid blue"});
  */

  /* attribute filter */
  /*
    $("div[class]").css({border: "2px solid pink"});
    $("img[alt]").css({border: "2px solid pink"});
  */

  /* attribute filter with value */
  /*
    $("img[alt=quote]").css({border: "2px solid pink"});
  */

  /* next element */
  /*
    $("#contact-methods").next().css({border: "3px solid black"});
  */

  /* prev element*/
  /*
    $("#social-nav").prev().css({border: "3px solid black"});
  */

  /* parent */
  /*
    $(".banner-title").parent().css({border: "3px solid pink"});
  */

  /* children */
  /*
    $("#social-nav").children().css({border: "3px solid blue"});
  */

  /* find */
  /*
  $("#contact").find(".facebook").css({border: "3px solid purple"});
  */

  /* closest */
  /*
    $("#social-nav").closest(".wrapper").css({border: "3px solid orange"});
  */

  /*
    $("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});
   */

  /* adding content */
  /*
    var tweet = "<div style='margin:20px 0; padding:10px; background: #eee;'>The big fight live: Ham vs Cheese!</div>";

    $("#tweets div").append(tweet);
    $("#tweets div").prepend(tweet);
    $("#tweets p").before(tweet);
    $("#tweets p").after(tweet);
    $("#tweets div").html(tweet);
    $("#tweets div p").text("The big fight live: Ham vs Cheese!");
  */

  /* wrap & unwrap */
  /*
    $("section").wrap("<div>");
    $("section").unwrap();
    $("section").wrapAll("<div>");
  */

  /* adding content */
  /*
  var wrapper = "<div class='wrapper'>";
  var buttom = $(".button");
  var wrapped = true;

  buttom[0].onclick = function(){
    if (wrapped){
      $("section").unwrap();
      wrapped = false;
      buttom.text("Wrap");
    } else{
      $("section").wrapAll(wrapper);
      wrapped = true;
      buttom.text("Unwrap");
    }
  };
  */
  /* remove content*/
  /*
    $(".button").empty();
    $(".button").remove();
    $("#contact img").remove();
  */

  /* change attributes */
  /*
    $("#contact img").removeAttr("alt");
    $("#contact img").attr("alt", "location");
    console.log($("#contact img").attr("alt"));
  */

  /* change css properties */
  /*console.log($("#social-nav").css("position"));
  console.log($("#social-nav").css("top"));
  $("#social-nav").css("top", "-200px").css("left", "100px");

  $("#social-nav").css({
    "top": "-400px",
    "left": "150px",
    "opacity": "0.5",
    "border-top": "4px solid red"
  });
  */

  /* Adding & removing classes */
  /*
    $("header .wrapper").removeClass("wrapper");
    $("header > div").addClass("wrapper");
  */

  var button = $("#lead-banner a");
  button[0].onclick = function(){
    $("#points-of-sale").toggleClass("open");
    return false;
  };

  /* bind and unbind events */
  var myList = $("#points-of-sale li");
  myList.on("click", function(){
    $(this).css({"background": "pink"});
    myList.off("click");
  });

  var myNav = $("nav a");
  myNav.hover(function(){
    $(this).css({"background-color": "pink"});
  }, function(){
    $(this).css({"background-color": "green"});
  });

  /* event object in jQuery */
  /*
    $(document).ready(function(){
    $("*").on("click", function(e){
      console.log(e.target);
      console.log("The event type is: " + e.type);
      console.log("X co-ordinate of the event is: " + e.pageX);
      console.log("Y co-ordinate of the event is: " + e.pageY);
      e.stopPropagation(); // make sure is calling only for first element in the stack.
    });
  });
  */

  /* jQuery animations */


  $(document).ready(function(){
    function complete(){
      console.log("Animation complete");
    }
    /*
    $("section > h2").on("click", function(){
      $(this).animate(
        {
          "width" : "500px",
          "height": "100px"
        }, 1000, "linear", complete);
    });
    */
    $("section > h2").on("click", function(){
      //$(this).fadeOut(2000).fadeIn(500);
      /*$(this).fadeTo(200, 0.2)
             .fadeTo(200, 0.8)
             .fadeTo(200, 0.2)
             .fadeTo(200, 0.8)
             .fadeTo(200, 0.2)
             .fadeTo(200, 0.8);
      */
      //$(this).hide(1000).show(1000);
      $(this).toggle(1000);

    });

    $("img[alt=map]").on("click", function(){
      $("section > h2").toggle(1000);
    });
  });
  //
  // $(document).ready(function(){
  //   $(".slide-button-up").on("click", function(){
  //     $("#lead-banner").slideUp(100);
  //     // $("#lead-banner").slideToggle(100);
  //   });
  // });
  //
  // $(document).ready(function(){
  //   $(".slide-button-down").on("click", function(){
  //     $("#lead-banner").slideDown(4000);
  //   });
  // });


  // $(document).ready(function(){
  //   var allQuotes = $("blockquote");
  //   var currentQuote = 0;
  //   function changeQuote(){
  //     $(allQuotes[currentQuote]).fadeOut(200, function(){
  //       if (currentQuote == allQuotes.length - 1){
  //         currentQuote = 0;
  //       } else {
  //         currentQuote++;
  //       }
  //
  //       $(allQuotes[currentQuote]).fadeIn(200);
  //     });
  //   }
  //
  //   var quoteTimer = setInterval(changeQuote, 3000);
  // });

  $(document).ready(function(){
    var items = $("#points-of-sale li");
    items.on("click", function(){
      $(this).find("p").slideToggle(500);
    });
  });
});
