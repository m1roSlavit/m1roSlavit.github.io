document.addEventListener("DOMContentLoaded", function(event) {

	function toggleClassCustom(elem, newClassName) {
		if (elem.className.search(newClassName) != -1) {
			var allClass = elem.className;
			allClass = allClass.replace(" " + newClassName, "");
			elem.className = allClass;
		}else if (elem.className.search(newClassName) == -1) {
			elem.className += (" " + newClassName);
		} else {
			console.log("toggleClassCustom error");
		}
	}
	
	(function() {
		var burger = document.getElementById("sticky-line-burger");
		var navContent = document.getElementById("sticky-line-nav-content");
		console.log(burger);
		burger.addEventListener("click", function () {
			console.log("3232")
			toggleClassCustom(burger, "active");
			toggleClassCustom(navContent, "active")
			toggleClassCustom(document.body, "lock")
		})
	})()
})