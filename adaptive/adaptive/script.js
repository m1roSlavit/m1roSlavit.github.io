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
		burger.addEventListener("click", function () {
			toggleClassCustom(burger, "active");
			toggleClassCustom(navContent, "active");
			toggleClassCustom(document.body, "lock");
		});

		navContent.addEventListener("click", function (e) {
			if (e.target.className.search("sticky-line__nav-link") != -1) {
				toggleClassCustom(burger, "active");
				toggleClassCustom(navContent, "active");
				toggleClassCustom(document.body, "lock");
			} else {
				e.preventDefault;
			}
		})

	})()

	function activeTabs() {
			$("ul.tabs__caption").on("click", "li:not(.active)", function() {
				$(this)
					.addClass("active")
					.siblings()
					.removeClass("active")
					.closest("div.tabs")
					.find("div.tabs__content")
					.removeClass("active")
					.eq($(this).index())
					.addClass("active");
			});
		};

		activeTabs();

});