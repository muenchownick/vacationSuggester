var islandScore = 0;
var cityScore = 0;
var religionScore = 0;


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

// this will take score from radio button and store as 'result'

    var result = $("input:radio[name=question1]:checked").val();
        addScore(result);
    var result = $("input:radio[name=question2]:checked").val();
        addScore(result);
    var result = $("input:radio[name=question3]:checked").val();
        addScore(result);
    var result = $("input:radio[name=question4]:checked").val();
        addScore(result);
    var result = $("input:radio[name=question5]:checked").val();
        addScore(result);

// HOW DO I MAKE THE SCORE RESETT!!!!!!??????
//     var reset = function(){
//       $(islandScore).val("0");
//     };
  // $("islandScore").val("0");


  if (islandScore > cityScore && islandScore > religionScore) {
    alert("WE ARE GOING TO COSTA RICO");
    $("#showresult").addClass(".showCostaRica");

  } else if (cityScore > islandScore && cityScore > religionScore) {
    alert("WE ARE GOING TO LONDON");
    $("#showresult").addClass(".showLondon")
// post image of place

  } else if (religionScore > islandScore && religionScore > cityScore) {
    alert("WE ARE GOING TO MECCA");
    $("#showresult").addClass(".showMecca")
// post image of place

  } else {
    alert("What happened!?");
// post picute of what happened

};
    $("#resetbtn").click(function(){
      islandScore = 0;
      cityScore = 0;
      religionScore = 0;
      alert("reset values ;)");

});

 });
});

  var addScore = function (result) {
    if (result === "city") {
      cityScore +=  1;
    }
    if (result === "island") {
      islandScore += 1;
    }
    if (result === "religion") {
      religionScore += 1;
    }
  };

  // to randomize radio button
  // var questions = $("#questions");
  //
  // questions.html(
  //     questions.find("label").sort(function(){
  //         return Math.round(Math.random())-0.5;
  //     })
  // );
