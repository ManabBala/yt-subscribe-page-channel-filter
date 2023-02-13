// Exact name of the channel(case sensitive)
const channels = ["Shashwata Vlogs", "Kumar Shekh"];

// 1 = newest video, 2 = second newest,....
const videoToKeep = 1;

console.log("YT subscribe page channel filter started.");

var getElementByXpath = function (xpathToExecute) {
	var result = [];
	var nodesSnapshot = document.evaluate(
		xpathToExecute,
		document,
		null,
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
		null
	);
	for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
		result.push(nodesSnapshot.snapshotItem(i));
	}
	return result;
};

// main filtering function
const filter = function (channel) {
	const elements = getElementByXpath(`//a[text()='${channel}']`);

	elements.forEach((element, index) => {
		if (index + 1 !== videoToKeep) {
			// console.log(`${index}) ${element.text}`);
			element.parentElement.parentComponent.remove();
		} else {
			console.log(`${index}) ${element.text}(Preserving This Video Only)`);
			element.text = element.text + "(Filtered)";
		}
	});
};

// waiting for the page to fully load to apply filter
const loadCheck = function () {
	var checkEl = getElementByXpath("//span[text()='Today']");
	if (!checkEl) {
		console.log("page not loaded");
	} else {
		console.log("page loaded");
		clearInterval(loadCheckInterval);
		channels.forEach((channel) => {
			filter(channel);
		});
	}
};

const loadCheckInterval = setInterval(loadCheck, 500);
