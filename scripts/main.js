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

});
