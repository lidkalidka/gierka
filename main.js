var s_burger = document.querySelector(".icon-menu");
var s_ul = document.querySelector("ul.info");

var s_p1 = document.querySelector(".player1");
var s_p2 = document.querySelector(".player2");
var s_sc1 = document.querySelector("#display_p1");
var s_sc2 = document.querySelector("#display_p2");
var s_num = document.querySelector("input[name='number']");
var s_numDisplay = document.querySelector("#number");
var s_reset = document.querySelector("#reset");

var sc1 = 0;
var sc2 = 0;
var win_num = parseInt(s_numDisplay.textContent, 10);;

var game = true;

s_burger.addEventListener("click", function(){ 
    s_ul.classList.toggle("hide");
});

s_num.addEventListener("change", function(){
    reset();
    win_num = parseInt(this.value, 10);
    s_numDisplay.textContent = win_num;
});

s_p1.addEventListener("click", function(){
    if(game){
        // losowanie liczby z przedziału 0-5
        var ran = Math.floor(Math.random() * 6);
        sc1 = sc1 + ran;
        s_sc1.textContent = sc1;

        document.querySelector("#part1").classList.add("nonActive");
        document.querySelector("#part2").classList.remove("nonActive");

        if(sc1 >= win_num){
            s_sc1.classList.add("winner");
            s_p1.classList.add("winner");
            s_p1.textContent = "WINNER!";
            game = false;
        }
    }
});

s_p2.addEventListener("click", function(){
    if(game){
        var ran = Math.floor(Math.random() * 6);
        sc2 = sc2 + ran;
        s_sc2.textContent = sc2;

        document.querySelector("#part2").classList.add("nonActive");
        document.querySelector("#part1").classList.remove("nonActive");

        if(sc2 >= win_num){
            s_sc2.classList.add("winner");
            s_p2.classList.add("winner");
            s_p2.textContent = "WINNER!";
            game = false;
        }
    }
});

s_reset.addEventListener("click", reset);

function reset() {
    game = true;
    sc1 = 0;
    sc2 = 0;
    s_sc1.textContent = sc1;
    s_sc2.textContent = sc2;
    s_sc1.classList.remove("winner");
    s_sc2.classList.remove("winner");
    document.querySelector("#part1").classList.remove("nonActive");
    document.querySelector("#part2").classList.remove("nonActive");
    document.querySelector("#part2").classList.add("nonActive");
    s_p1.classList.remove("winner");
    s_p2.classList.remove("winner");
    s_p1.innerHTML = '<i class="icon-user"></i>Gracz 1';
    s_p2.innerHTML = '<i class="icon-user"></i>Gracz 2';
}
