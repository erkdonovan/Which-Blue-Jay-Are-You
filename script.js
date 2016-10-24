$(function() {
  var players = [
    Martin = {
      name: "Russell Martin",
      number: "55",
      position: "Catcher",
      height: "5'10",
      weight: "205lbs", 
      birthday: "15/03/83",
      draft: "Originally drafted in the 35th round in 2000 by the Montreal Expos, but didn't sign. After two years at college he was drafted as a third baseman in the 17th round in 2002 by the Los Angeles Dodgers.",
      stat1: "His full name is Russell Nathan Coltrane Jeanson Martin, Jr.",
      stat2: "As a member of the New York Yankees, he was one of three batters who hit an MLB record three grand slams in a 22-9 slamming of the Oakland Athletics on August 25, 2011."
     }, 
    Tulo = {
      name: "Troy Tulowitzki",
      number: "02",
      position: "Shortstop",
      height: "6'3",
      weight: "205lbs",
      birthday: "10/10/84", 
      draft: "2005 Colorado Rockies, 1st rd. (7th overall)",
      stat1: "Is a five-time MLB All-Star, a two-time Gold Glove Award winner, and a two-time Silver Slugger Award winner",
      stat2: "In the third game of the 2015 AL CS, he hit a three-run home run and was later ejected and became the first American League player to be ejected from a postseason game since 1998"
    },
    Pillar = {
      name: "Kevin Pillar",
      number: "11",
      position: "Centre Field",
      height: "6'0",
      weight: "205lbs",
      birthday: "04/01/89",
      draft: "Drafted - 32nd round (979th overall)",
      stat1: "On June 2 2015, he recorded his first two-home run game where he became the first right-handed batter to hit two home runs in a game off of Max Scherzer.",
      stat2: "2015 Wilson Defensive Player of the Year for center field"
    },
    Edwin = {
      name: "Edwin Encarnacion",
      number: "10",
      position: "Designated Hitter",
      height: "6'1",
      weight: "230lbs",
      birthday: "07/01/83",
      draft: "2000 Texas Rangers, 9th rd. (274th overall)",
      stat1: "In the game against the Seattle Mariners on April 28, 2012, his grand slam marked the first time that he held his arm out in his trademark 'chicken-wing'",
      stat2: "In the eleventh inning of the 2016 Wild Card game, he hit a walk-off, three-run home run to give the Blue Jays a 5–2 victory"
    },
    Gibbons = {
      name: "John Gibbons",
      number: "05",
      position: "Manager",
      height: "5'9",
      weight: "187lbs",
      birthday: "06/08/62",
      draft: "1980 New York Mets, 1st rd. (24th overall)",
      stat1: "He began his coaching career with the Mets in 1991 as a minor league hitting instructor",
      stat2: "On September 11, Gibbons was ejected for the eighth time in the 2016 season, tying the team's single-season record set by Bobby Cox"
    }
  ];

var score = 0


  //Allow user to select some selections
  $("form").on("submit", function(e){
    e.preventDefault();
    //total the checked options
    var selectedQuestion1 = $("input[name=question1]:checked").val();
    var selectedQuestion2 = $("input[name=question2]:checked").val();
    var selectedQuestion3 = $("input[name=question3]:checked").val();
    var selectedQuestion4 = $("input[name=question4]:checked").val();
    var selectedQuestion5 = $("input[name=question4]:checked").val();

    //take value and turn into integer
    var answer1 = parseInt(selectedQuestion1);
    var answer2 = parseInt(selectedQuestion2);
    var answer3 = parseInt(selectedQuestion3);
    var answer4 = parseInt(selectedQuestion4);
    var answer5 = parseInt(selectedQuestion5);

    //output total value into variable 
    var score = answer1 + answer2 + answer3 + answer4 + answer5;

    //grab object related to total range if()
    if (score <= 6) {
      var result = players[0];
    } else if (score <= 9) {
      var result = players[1];
    }  else if (score <= 12) {
      var result = players[2];
    }  else if (score <= 14) {
      var result = players[3]; 
    }  else if (score === 15) {
      var result = players[4];
    } else {
      alert("Answer all the questions");
    };

    //display array resulted objects 
    //Put option on the page 
    if (score >= 5) {
      $(".results").html(`
      <h1>You are:</h1>
      <div class="stuffs">
        <h2 class="name">${result.name}</h2>
        <p class="number">${result.number}</p>
      </div>
      <div class="left">
        <ul>
          <li><i class="fa fa-star" aria-hidden="true"></i> Drafted: ${result.draft}</li>
          <li><i class="fa fa-star" aria-hidden="true"></i> ${result.stat1}</li>
          <li><i class="fa fa-star" aria-hidden="true"></i> ${result.stat2}</li>
        </ul>
      </div>
      <div class="right">
        <div class="stats">
          <p class="position">${result.position}</p>
          <p class="heigth">Height: ${result.height}</p>
          <p class="weight">Weight: ${result.weight}</p>
          <p class="birthday">${result.birthday}</p>
        </div>
        <div class="bottom-buttons">
          <a class="close" href="#">Take test again</a>
          <a href="#" id="twitter-button" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet your result</a>
        </div>
      </div>
        `);

      $(".results").show();
      $(".overlay").show();

      $(".game__right").hide();

      $(".close").click(function(e){
        e.preventDefault();
         window.location.reload();
         setTimeout(window.location.reload);
      });

      var tweet = (`https://twitter.com/intent/tweet?text=I got ${result.name}! Find out which @BlueJay you are! whichjayareyou.com %23whichjay`)
      document.getElementById("twitter-button").setAttribute("href", tweet);
  }; //end of score pop-up display

  //allow user to click outside of pop-up to close
  //add button to pop-up to share on twitter
  //add button to pop-up to restart quiz

  }); // end of submit click

  

  var before__tweet = (`https://twitter.com/intent/tweet?text=Find out which @BlueJay you are before the next game at whichjayareyou.com! %23whichjay`)
      document.getElementById("twitter-before").setAttribute("href", before__tweet);

    if (screen.width >= 870) {
      //Stop sidebar from entering footer
      $(window).scroll(function () { 
      // distance from top of footer to top of document
      footertotop = ($('#footer').position().top);
      // distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding)
      scrolltop = $(document).scrollTop()+760;
      // difference between the two
      difference = scrolltop-footertotop;
      // if user has scrolled further than footer,
      // pull sidebar up using a negative margin
      if (scrolltop > footertotop) {
        $('#game__day').css('margin-top',  0-difference);
      } else  {
        $('#game__day').css('margin-top', 0);
      }
    });
  }

}); //end of function 


