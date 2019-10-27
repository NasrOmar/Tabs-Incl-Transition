// JavaScript Document

function tabClick(trigger) {
	let activeTabLink = document.getElementsByClassName("tab-link-active");
	let activeTabPanel = document.getElementsByClassName("tab-panel-active");
	
	var i;
	
	for (i = 0; i < activeTabLink.length; i++) {
		activeTabLink[i].classList.remove("tab-link-active");
		activeTabPanel[i].classList.remove("tab-panel-active");
	}
	
	
	if (trigger.target.className == "tab-link") {
		trigger.target.className += " tab-link-active";
		document.getElementById(trigger.target.href.split("#")[1]).className += " tab-panel-active";
		
	}else if (trigger.target.className !== "tab-link") {
		trigger.target.querySelector(".tab-link").className += " tab-link-active";
		document.getElementById(trigger.target.querySelector(".tab-link").href.split("#")[1]).className += " tab-panel-active";
	}
}

const element = document.getElementById("tab");

element.addEventListener("click", tabClick, false);