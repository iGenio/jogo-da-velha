var player, winner = null

var playerSelected = document.getElementById('jogador-selecionado')

var squares = document.getElementsByClassName('quadrado')

var winnerSelected = document.getElementById('vencedor-selecionado')

cheangePlayer('X')

function clickSquare (id) {
    if(winner !== null) {
        return;
    } 

    var square = document.getElementById(id)

    if (square.innerHTML !== '-') {
        return
    }

    square.innerHTML = player;
    square.style.color = '#141414';


    if(player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }

    checkWinner()

}


function cheangePlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}


function checkWinner () {
    var s1 = document.getElementById(1);
    var s2 = document.getElementById(2);
    var s3 = document.getElementById(3);
    var s4 = document.getElementById(4);
    var s5 = document.getElementById(5);
    var s6 = document.getElementById(6);
    var s7 = document.getElementById(7);
    var s8 = document.getElementById(8);
    var s9 = document.getElementById(9);


    if(checkSequence(s1, s2, s3)) {
        cheangeColor(s1, s2, s3);
        cheangeWinner(s3)
        return
    }
    
    if(checkSequence(s4, s5, s6)) {
        cheangeColor(s4, s5, s6);
        cheangeWinner(s6)
        return
    }

    if(checkSequence(s7, s8, s9)) {
        cheangeColor(s7, s8, s9);
        cheangeWinner(s9)
        return
    }

    if(checkSequence(s1, s4, s7)) {
        cheangeColor(s1, s4, s7);
        cheangeWinner(s7)
        return
    }

    if(checkSequence(s2, s5, s8)) {
        cheangeColor(s2, s5, s8);
        cheangeWinner(s8)
        return
    }

    if(checkSequence(s3, s6, s9)) {
        cheangeColor(s3, s6, s9);
        cheangeWinner(s9)
        return
    }

    if(checkSequence(s1, s5, s9)) {
        cheangeColor(s1, s5, s9);
        cheangeWinner(s9)
        return
    }

    if(checkSequence(s3, s5, s7)) {
        cheangeColor(s3, s5, s7);
        cheangeWinner(s7)
        return
    }
    
}

function checkSequence(s1, s2, s3) {
    var isEqual = false;

    if(s1.innerHTML !== '-' && s1.innerHTML == s2.innerHTML && s2.innerHTML == s3.innerHTML) {
        isEqual = true;
    }

    return isEqual
}

function cheangeColor(s1, s2, s3) {
    s1.style.background = '#0f0'
    s2.style.background = '#0f0'
    s3.style.background = '#0f0'
}

function cheangeWinner (square) {
    winner = square.innerHTML;
    winnerSelected.innerHTML = winner;
}

function restartGame() {
    winner = null;
    winnerSelected = ' ';
    for (var i =1; i <= 9; i++) {
        var square = document.getElementById(i)
        square.innerHTML = '-'
        square.style.background = '#eee'
        square.style.color = '#eee'
    }

    cheangePlayer('X')
}