var name1 = prompt("enter your name");
var name2 = prompt("enter your lover name");

function love_calculation (name1,name2){
    var love_score = Math.random();
    love_score = love_score * 100 ;
    love_score = Math.floor(love_score) + 1 ;
    if (love_score > 70){
        alert(name1 + " and " + name2 + " : you love each other like kanye loves kanye <3 ." + " your love score is : " + love_score + "%");
    }
    if (love_score > 30 && love_score < 70 ){
        alert(name1 + " and " + name2 + " your love score is : " + love_score + "%");
    }
    else{
        alert(name1 + " and " + name2 +"you go together like ail and water" + " your love score is : " + love_score + "%");
    }
}

