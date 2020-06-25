var abilitySlider = function() {

  // text that is displayed above the slider
  const textSelection = [
    "Worst Possible",
    "Not Likely",
    "Less than half the time",
    "More than half the time",
    "Likely",
    "Best Possible",
  ];

  // get all sliders
  var abilitySliders = Array.from(document.getElementsByClassName("rangeClass"));

  //itterate through abilitySliders and adjust value above it to meet the text
  abilitySliders.forEach((slider) => {
    var rangeName = slider.id + "-value";
    document.getElementById(slider.id + "-value").value = textSelection[slider.value];
    // if "never" is selected it is an emergency
    // if (slider.value > 4) {
    //   document.getElementById(slider.id + "-info").style.display = "block";
    // } else {
    //   document.getElementById(slider.id + "-info").style.display = "none";
    // }

  });

};

var importanceSlider = function() {
  // text that is displayed above the slider
  const textSelection = [
    "Not Important",
    "Slightly Important",
    "Little Importanance",
    "Somewhat Important",
    "Important",
    "Very Important",
  ];

  // get all sliders
  var importanceSliders = Array.from(document.getElementsByClassName("importanceRangeClass"));

  var goalList = Array.from(document.getElementsByClassName("customTitle"));

  var pieData = [];

 var elementNumber = 0
  //itterate through importanceSliders and adjust value above it to meet the text
  importanceSliders.forEach((slider) => {
    
    var rangeName = slider.id + "-value";
    document.getElementById(slider.id + "-value").value = textSelection[slider.value];

    const label = goalList[elementNumber].innerText

    pieData.push({value: slider.value, label: label})
    elementNumber+=1



  });

  var color = d3.scaleOrdinal()
  .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


  function randomData (){
  //var labels = color.domain();
  return pieData.map(function(data){
    return { label: data.label, value: data.value }
  });
  }

  change(randomData());


};
