player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
var player1score=0
var player2score=0
document.getElementById("player1name").innerHTML=player1name+";"
document.getElementById("player2name").innerHTML=player2name+";"
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn"+player1name
document.getElementById("player_answer").innerHTML="answer turn"+player2name
function send() {
     get_word=document.getElementById("word").value
word=get_word.toLowerCase()
console.log(word)
charAt1 = word.charAt(1);
len1=word.length-1
charAt2=word.charAt(len1)
len2=word.length-1
charAt3=word.charAt(len2)
remove1=word.replace(charAt1,"_")
remove2=remove1.replace(charAt2,"_")
remove3=remove2.replace(charAt3,"_")
questionword="<h4 id='word_display'> Q. "+remove3+"</h4>";
inputbox="<br>Answer : <input type='text' id='input_check_box'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=questionword+inputbox+checkbutton
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
questionturn="player1"
answerturn="player2"
function check() {
    getanswer=document.getElementById("input_check_box").value
    answer=getanswer.toLowerCase()
        if (answer==word) {
        if (answerturn=="player1") {
         player1score=player1score+1   
        } 
        if (answerturn=="player2") {
            player2score=player2score+1   
           }  
        }
    if (questionturn=="player1") {
      questionturn="player2"
      document.getElementById("player_question").innerHTML="questionturn="+player2name
    }     
else{
    questionturn="player1"
document.getElementById("player_question").innerHTML="questionturn="+player1name
}
if (answerturn=="player1") {
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="anwerturn="+player2name
  }     
else{
  anwerturn="player1"
document.getElementById("player_answer").innerHTML="answerturn="+player1name
}
}





