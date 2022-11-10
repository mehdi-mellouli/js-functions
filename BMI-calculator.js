var weight = prompt("what is your weight?(in KG)");
var height = prompt("what is your height?(in meters)");

function bmiCalculator(weight, height){
    var bmi = (weight/(height*height));
    return Math.round(bmi);
};

bmiCalculator();
alert("your bmi calculation is " + bmi + " kg/m².");
