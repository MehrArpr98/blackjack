
var cards = ["K1","K2","K3","K4","K5","K6","K7","K8","K9","K10","KJ","KQ","KK",
    "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK",
    "G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","GJ","GQ","GK",
    "P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","PJ","PQ","PK"
]
var ourCards=[];
var sum = 0;
var counter = 0;
var boolSum = false;
var card1 = randomCard();
var card2 = randomCard();
var displayCount = 3;
var str = "";
var rival = competitor();

makeSum(card1);
makeSum(card2);


function randomCard(){
    counter++;
    var randomCard= Math.floor(Math.random() * (52- ourCards.length));
    var card = cards[randomCard];
    document.getElementById("card"+(ourCards.length+1)).src="../pics/"+card+".png";
    ourCards.push(card)
    cards.splice(randomCard, 1);
    move();
    return card;
}

function blackjackInFirst(){
    if   ((card1.charAt(1) =='1' && card1.length == 2 && card2.charCodeAt(1) >73 && card2.charCodeAt(1)<82 )
        ||(card2.charAt(1) =='1' && card2.length == 2 && card1.charCodeAt(1) >73 && card1.charCodeAt(1)<82)
        ||(card1.charAt(1) =='1' && card1.length == 2 && card2.charAt(1) =='1' && card2.length == 3 )
        ||(card2.charAt(1) =='1' && card2.length == 2 && card1.charAt(1) =='1' && card1.length == 3)){
        sum = 21;
        boolSum = true
    }
}

function makeSum(card){
    if((card.charCodeAt(1) >73) && (card.charCodeAt(1)<82)){
        sum += 10;
    }else {
        sum += parseInt(card.substring(1));
    }
    blackjackInFirst();
    document.getElementById("sum").innerText=sum;

}

function takeAnotherCard() {
    var card = randomCard();
    makeSum(card);
    document.getElementById("card"+displayCount).style.display= "block";
    displayCount++;

}



function move() {
    var myId = "card"+counter;
    var elem = document.getElementById(myId);
    var left = parseInt(getComputedStyle(document.querySelector('#'+myId)).left.substring(0,3));

    var id = null;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);

    function frame() {
        if (pos == left) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

function competitor(){
    return (Math.floor(Math.random() * 11) + 15);
}

function compare(){

    if(boolSum){
        //you win
        str = "congratulations!!! you' ve got a blackjack";
        sessionStorage.setItem("str", str);
        window.location.href='../alertPage/alertPage.html'
        return;
    }else if(sum == 21){
        if(rival == 21){
            //not lose,but not also win
            str = "Your score : 21.";
            str =str+ "Your rival' s score : 21.";
            str =str+ "OH!!! you' ve got 21, but your rival got too.";

        }else {
            //you win
            str = "Your score : 21.";
            str =str+ "Your rival' s score : "+rival+".";
            str =str+ "congratulations!!! you' ve got 21 and you win.";

        }
    }else if(sum < 21){
        if(rival <= 21 && rival > sum){
            //you lose
            str = "Your score : "+sum+".";
            str =str+ "Your rival' s score : "+rival+".";
            str =str+ "OH!!! your rival's score is higher and you lose.";

        }else if(rival == sum) {
            //you lose
            str = "Your score : "+sum+".";
            str =str+ "Your rival' s score : "+rival+".";
            str =str+ "OH!!! your rival's win.";

        }else {
                //you win
                str = "Your score : "+sum+".";
                str =str+ "Your rival' s score : "+rival+".";
                str =str+ "congratulations!!! you win.";
            }

    }else {
        //you lose
        str = "Your score : "+sum+".";
        str = str+ "OH!!! your over 21 and you lose";

    }

    sessionStorage.setItem("str", str);
    window.location.href='../alertPage/alertPage.html'

}

