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
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard (cardId) {
	if (cardsInPlay.length == 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);