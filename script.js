/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
	const coffeeCounter = document.getElementById("coffee_counter");
	coffeeCounter.innerText = coffeeQty;
	return coffeeCounter;
}

function clickCoffee(data) {
	data.coffee++;
	updateCoffeeView(data.coffee);
}

/**************
 *   SLICE 2 (test spec start at line 106)
 **************/

function unlockProducers(producers, coffeeCount) {
	for (let i = 0; i < producers.length; i++) {
		if (coffeeCount >= producers[i].price / 2) {
			producers[i].unlocked = true;
		}
	}
}

function getUnlockedProducers(data) {
	//use filter() function

	const copyData = data.producers;
	let result = [];

	for (let i = 0; i < copyData.length; i++) {
		if (data["producers"][i]["unlocked"] === true) {
			result.push(copyData[i]);
		}
	}

	return result;
}

function makeDisplayNameFromId(id) {
	const titleCase = (snakeCase) =>
		snakeCase.replace(/^_*(.)|_+(.)/g, (snakeCase, c, d) =>
			c ? c.toUpperCase() : " " + d.toUpperCase()
		);
	return titleCase(id);
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
	const containerDiv = document.createElement("div");
	containerDiv.className = "producer";
	const displayName = makeDisplayNameFromId(producer.id);
	const currentCost = producer.price;
	const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
  </div>
  `;
	containerDiv.innerHTML = html;
	return containerDiv;
}

function deleteAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function renderProducers(data) {
	producerContainer = document.getElementById("producer_container");
	//producerContainer.innerText = data;
	//copyData = data.producers;

	//console.log({ data });
	makeProducerDiv(producerContainer);
	//console.log(copyData.length);
	/* const deletedNodes = deleteAllChildNodes(data);
	console.log(deletedNodes);
	for (let i = 0; i < copyData.length; i++) {
		makeProducerDiv();
	} */
	/* if (!copyData["producers"][i][""]) {
			//result.push(copyData[i]);
		}
	} */

	//spec 3
	//unlockProducers(producerContainer);
	//spec 4
	//getUnlockedProducers(data);
	//spec 5
	//deleteAllChildNodes();
	//data["producers"][i]["unlocked"] === true
	//const producerContainer = document.getElementById("producer_container");

	//while (producersList != "") makeProducerDiv(producersList);

	/* 	const copyData = data.producers;
	let producerContainer = [];

	for (let i = 0; i < copyData.length; i++) {
		if (data[i] != "") {
			//result.push(copyData[i]);
			producerContainer += makeProducerDiv(data[i]);
			console.log({ producerContainer });
		}
	} */

	/* 	producerContainer.forEach((producerContainer) => {
    if (producerContainer.childNodes.length == 0) {
      producerContainer.remove();
		}
	}); */
	//const producerContainer = document.getElementById("producer_container");
	//console.log({ makeProducerDiv });
}

/**************
 *   SLICE 3 COMMENTED
 **************/

function getProducerById(data, producerId) {
	return data;
}

function canAffordProducer(data, producerId) {
	// your code here
}

function updateCPSView(cps) {
	// your code here
}

function updatePrice(oldPrice) {
	// your code here
}

function attemptToBuyProducer(data, producerId) {
	// your code here
}

function buyButtonClick(event, data) {
	// your code here
}

function tick(data) {
	// your code here
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === "undefined") {
	// Get starting data from the window object
	// (This comes from data.js)
	const data = window.data;

	// Add an event listener to the giant coffee emoji
	const bigCoffee = document.getElementById("big_coffee");
	bigCoffee.addEventListener("click", () => clickCoffee(data));

	// Add an event listener to the container that holds all of the producers
	// Pass in the browser event and our data object to the event listener
	const producerContainer = document.getElementById("producer_container");
	producerContainer.addEventListener("click", (event) => {
		buyButtonClick(event, data);
	});

	// Call the tick function passing in the data object once per second
	setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
	module.exports = {
		updateCoffeeView,
		clickCoffee,
		unlockProducers,
		getUnlockedProducers,
		makeDisplayNameFromId,
		makeProducerDiv,
		deleteAllChildNodes,
		renderProducers,
		updateCPSView,
		getProducerById,
		canAffordProducer,
		updatePrice,
		attemptToBuyProducer,
		buyButtonClick,
		tick,
	};
}
