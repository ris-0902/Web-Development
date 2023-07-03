var start=false;
var num=0;
var pos=0;
var step=38.5;
var pawn="";
var all=["RED","YELLOW","BLUE","GREEN"];


function kill(){
    var kil="";
    for (var i=0;i<4;i++){
        for (var n=1;n<5;n++){
            var first=document.getElementById(all[i]+n);
            var second=document.getElementById(pawn);
            let fir=all[i].charAt(0); let sec=pawn.charAt(0);
            if (fir==sec) return false;
            if (first.style.top=='65px' &&first.style.left=='919px') return false;
            if (first.style.top=='527px' &&first.style.left=='996px') return false;
            if (first.style.top=='334.5px' &&first.style.left=='726.5px') return false;
            if (first.style.top=='257.5px' &&first.style.left=='1188.5px') return false;
            if (first.style.left==second.style.left&&first.style.top==second.style.top&&pos+num<61){
                kil=all[i]+n;
                return kil;
            }
        }
    }
    return false;
}

function nextplayer(){
    if (num!=6){
        var text=document.getElementById('curr_player');
        var pos=document.getElementById('turn');
        var player=document.getElementById('player_num');
        switch(text.innerText){
            case "RED" : 
                text.innerText=text.style.color = "BLUE";
                pos.style.left="230px";
                player.innerText="Player : 2";
                break;
            case "BLUE" : 
                text.innerText=text.style.color = "YELLOW";
                pos.style.left="263px";
                player.innerText="Player : 3";
                break;
            case "YELLOW" : 
                text.innerText=text.style.color = "GREEN";
                pos.style.left="245px";
                player.innerText="Player : 4";
                break;
            case "GREEN" : 
                text.innerText=text.style.color = "RED";
                pos.style.left="220px";
                player.innerText="Player : 1";
                break;
        }
        var txt=document.getElementById('txt');
        txt.innerText="";
        var die=document.getElementById('die');
        die.style.background="url(Dice_rotating.gif)";
        die.style.backgroundSize="contain";
    }
}

var position={
    RED1:0, RED2:0,RED3:0,RED4:0,
    BLUE1:0, BLUE2:0,BLUE3:0,BLUE4:0,
    YELLOW1:0, YELLOW2:0,YELLOW3:0,YELLOW4:0,
    GREEN1:0, GREEN2:0,GREEN3:0,GREEN4:0
};
var open={
    RED1:0, RED2:0,RED3:0,RED4:0,
    BLUE1:0, BLUE2:0,BLUE3:0,BLUE4:0,
    YELLOW1:0, YELLOW2:0,YELLOW3:0,YELLOW4:0,
    GREEN1:0, GREEN2:0,GREEN3:0,GREEN4:0
};

function down(){
    var x=document.getElementById(pawn);
    var curr = Number(x.style.top.replace(/[a-z]/g, ''));
    x.style.top = (curr+step)+'px';
    pos++;
}
function up(){
    var x=document.getElementById(pawn);
    var curr = Number(x.style.top.replace(/[a-z]/g, ''));
    x.style.top = (curr-step)+'px';
    pos++;
}
function right(){
    var x=document.getElementById(pawn);
    var curr = Number(x.style.left.replace(/[a-z]/g, ''));
    x.style.left = (curr+step)+'px';
    pos++;
}
function left(){
    var x=document.getElementById(pawn);
    var curr = Number(x.style.left.replace(/[a-z]/g, ''));
    x.style.left = (curr-step)+'px';
    pos++;
}
var stepsred=[];
var stepsblue=[];
var stepsyellow=[];
var stepsgreen=[];
function pushsteps(val,step, total){
    for (var i=0;i<total;i++){
        step.push(val);
    }
}

// RED PATH 
pushsteps(down,stepsred,4);
pushsteps(left,stepsred,7);
pushsteps(down,stepsred,2);
pushsteps(right,stepsred,5);
pushsteps(down,stepsred,7);
pushsteps(right,stepsred,2);
pushsteps(up,stepsred,5);
pushsteps(right,stepsred,7);
pushsteps(up,stepsred,2);
pushsteps(left,stepsred,5);
pushsteps(up,stepsred,7);
pushsteps(left,stepsred,1);
pushsteps(down,stepsred,5);

// BLUE PATH 
pushsteps(left,stepsblue,4);
pushsteps(up,stepsblue,7);
pushsteps(left,stepsblue,2);
pushsteps(down,stepsblue,5);
pushsteps(left,stepsblue,7);
pushsteps(down,stepsblue,2);
pushsteps(right,stepsblue,5);
pushsteps(down,stepsblue,7);
pushsteps(right,stepsblue,2);
pushsteps(up,stepsblue,5);
pushsteps(right,stepsblue,7);
pushsteps(up,stepsblue,1);
pushsteps(left,stepsblue,5);

// YELLOW PATH 
pushsteps(up,stepsyellow,4);
pushsteps(right,stepsyellow,7);
pushsteps(up,stepsyellow,2);
pushsteps(left,stepsyellow,5);
pushsteps(up,stepsyellow,7);
pushsteps(left,stepsyellow,2);
pushsteps(down,stepsyellow,5);
pushsteps(left,stepsyellow,7);
pushsteps(down,stepsyellow,2);
pushsteps(right,stepsyellow,5);
pushsteps(down,stepsyellow,7);
pushsteps(right,stepsyellow,1);
pushsteps(up,stepsyellow,5);

// GREEN PATH 
pushsteps(right,stepsgreen,4);
pushsteps(down,stepsgreen,7);
pushsteps(right,stepsgreen,2);
pushsteps(up,stepsgreen,5);
pushsteps(right,stepsgreen,7);
pushsteps(up,stepsgreen,2);
pushsteps(left,stepsgreen,5);
pushsteps(up,stepsgreen,7);
pushsteps(left,stepsgreen,2);
pushsteps(down,stepsgreen,5);
pushsteps(left,stepsgreen,7);
pushsteps(down,stepsgreen,1);
pushsteps(right,stepsgreen,5);

function reset(dead){
    open[dead]=0; position[dead]=0;
    var move=document.getElementById(dead);
    switch(dead){
        case "RED1": move.style.top = 47 + "px"; move.style.left = 702 + "px"; break;
        case "RED2": move.style.top = 46 + "px"; move.style.left = 857 + "px"; break;
        case "RED3": move.style.top = 205 + "px"; move.style.left = 703 + "px"; break;
        case "RED4": move.style.top = 205 + "px"; move.style.left = 857 + "px"; break;

        case "BLUE1": move.style.top = 45 + "px"; move.style.left = 1058 + "px"; break;
        case "BLUE2": move.style.top = 45 + "px"; move.style.left = 1210 + "px"; break;
        case "BLUE3": move.style.top = 205 + "px"; move.style.left = 1058 + "px"; break;
        case "BLUE4": move.style.top = 205 + "px"; move.style.left = 1210 + "px"; break;

        case "GREEN1": move.style.top = 401 + "px"; move.style.left = 703 + "px"; break;
        case "GREEN2": move.style.top = 401 + "px"; move.style.left = 863 + "px"; break;
        case "GREEN3": move.style.top = 545 + "px"; move.style.left = 702 + "px"; break;
        case "GREEN4": move.style.top = 545 + "px"; move.style.left = 863 + "px"; break;

        case "YELLOW1": move.style.top = 387 + "px"; move.style.left = 1056 + "px"; break;
        case "YELLOW2": move.style.top = 385 + "px"; move.style.left = 1211 + "px"; break;
        case "YELLOW3": move.style.top = 544 + "px"; move.style.left = 1058 + "px"; break;
        case "YELLOW4": move.style.top = 545 + "px"; move.style.left = 1210 + "px"; break;

    }
}

function NOfree(){
    var play=document.getElementById('curr_player');
    for (var i=1;i<5;i++){
        if (open[play.innerText+i]==1 ) return false;
    }
    return true;
}


// Random Number
function generate_number(){
    if(!start){
        num = Math.ceil(Math.random()*6);
        // if (num<6) num=1;
        // num=6;
        var die=document.getElementById('die');
        die.style.backgroundImage= "url("+num+".jpg)";
        start=true;
    }
    if (num!=6 && NOfree()){
        var text=document.getElementById('txt');
        text.innerText="Unfortunately, you are stuck."
        window.setTimeout(nextplayer,500);
        start=false;
    }
}
function next_turn(){
    if (num<6){
        var player=document.getElementById('curr_player');
        if (player.innerText=="red"){
            text.innerText=text.style.color="blue";
        }
    }
}
function Move(color, token){
    var Text=document.getElementById('curr_player');
    pawn=color+token;
    console.log(pawn);
    pos=position[pawn];
    if (num + pos>61) stuck();
    else{
        if (start){
            var current_position=pos;
            if (Text.innerText==color){
                if (open[pawn]==1 || num==6){
                    if (open[pawn]==0){
                        var doc=document.getElementById(pawn);
                        switch (color){
                            case "RED":
                                doc.style.top='65px';
                                doc.style.left='919px';
                                break;
                            case "BLUE":
                                doc.style.top='257.5px';
                                doc.style.left='1188.5px';
                                break;
                            case "GREEN":
                                doc.style.top='334.5px';
                                doc.style.left='726.5px';
                                break;
                            case "YELLOW":
                                doc.style.top='527px';
                                doc.style.left='996px';
                                break;
                        }
                        open[pawn]=1;
                    }
                    else{
                        switch(color){
                            case "RED":
                                for (i=pos;i<current_position+num;i++){
                                    stepsred[i]();
                                    if (i==4) down();
                                    if (i==18) right();
                                    if (i==32) up();
                                    if (i==46) left();
                                }
                                break;
                            case "BLUE":
                                for (i=pos;i<current_position+num;i++){
                                    stepsblue[i]();
                                    if (i==4) left();
                                    if (i==18) down();
                                    if (i==32) right();
                                    if (i==46) up();
                                }
                                break;
                            case "YELLOW":
                                for (i=pos;i<current_position+num;i++){
                                    stepsyellow[i]();
                                    if (i==4) up();
                                    if (i==18) left();
                                    if (i==32) down();
                                    if (i==46) right();
                                }
                                break;
                            case "GREEN":
                                for (i=pos;i<current_position+num;i++){
                                    stepsgreen[i]();
                                    if (i==4) right();
                                    if (i==18) up();
                                    if (i==32) left();
                                    if (i==46) down();
                                }
                                break;
                        }
                        position[pawn]=pos;
                        var dead=kill();
                        console.log(dead);
                        if (dead!=false) reset(dead);
                        nextplayer();
                    }
                    num=0;
                    start=false;
                    var dice=document.getElementById('die');
                    dice.style.background="url(Dice_rotating.gif)";
                    dice.style.backgroundSize="contain";
                }
            }
        }
    }
}