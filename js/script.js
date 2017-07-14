// Logic

var score = 0;
var userChoice;

var gameChoices = {
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
};


var computerChoice = {
 init: function() {
       this.store = Math.floor(Math.random() * 3);
       this.text = gameChoices[this.store];
    },
    store: '',
    text: '',
};

var order = [0, 1, 2, 0];

var chooseVictor = function(player, computer) {
    if (order[player] === order[computer]) {
        return 'It is a draw. Try again?';
    } 
    if (order[player] === order[computer + 1]) {
        score++;
        return 'You won!'
    } else {
        score--;
        return 'You lost sadface';
    }
}

// User Interface 

var paragraph = document.querySelector('p');

var assignClick = function(tag, position) {
    tag.addEventListener('click', function() {
        // set the players choice
        userChoice = position;
        //give feedback to the cpu eventChoice
        computerChoice.init();
        paragraph.innerText = 'The computer pick: ' + computerChoice.text
        // determine the winner
        // display the winner and the current score
        paragraph.innerText += '\n' + chooseVictor(userChoice, computerChoice.store);
        paragraph.innerText += '\n' + 'SCORE: ' + score;
    })
}

var images = {
    elements: document.getElementsByTagName('img'),
    init: function() {
    for(var step = 0; step < this.elements.length; step++) {
        assignClick(this.elements[step], step);
    }
  }
}

images.init();