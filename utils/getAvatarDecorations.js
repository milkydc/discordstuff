(() => {
	var e = [];
	document
		.querySelectorAll(
			"div[class^='categories_'] div[class^='shopCard_'] div[class^='avatarContainer_'] svg:nth-child(2) div[class^='avatarStack_'] > img[class^='avatar_']"
		)
		.forEach((el) => {
			e.push(el.getAttribute("src").replace(/size=\d{2,4}&passthrough=false/, "size=1024"));
		});
	console.log(e.join("\n"));
})();
