var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images-2/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images-2/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images-2/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images-2/king-of-diamonds.png"
}
];

var cardsInPlay = []

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");

	} else {
  		alert("Sorry, try again.");
	}
}

function flipCard () {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage)
	if (cardsInPlay.length == 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function createBoard() {
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images-2/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

createBoard();
shuffle(cards);