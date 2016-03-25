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
