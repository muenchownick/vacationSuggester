// business logic
var islandScore = 0;
var cityScore = 0;
var religionScore = 0;

// user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

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

  if (islandScore > cityScore && islandScore > religionScore) {
    alert("WE ARE GOING TO COSTA RICO");
  } else if (cityScore > islandScore && cityScore > religionScore) {
    alert("WE ARE GOING TO LONDON");
  } else if (religionScore > islandScore && religionScore > cityScore) {
    alert("WE ARE GOING TO MECCA");
  } else {
    alert("What happened!?");
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
