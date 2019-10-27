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
	
	if (document.getElementById("tab-photos") == document.getElementsByClassName("tab-panel-active")[0]) {
		document.getElementById("float").className = "float float-photos";
	}else if (document.getElementById("tab-home") == document.getElementsByClassName("tab-panel-active")[0]) {
		document.getElementById("float").className = "float";
	}else if (document.getElementById("tab-videos") == document.getElementsByClassName("tab-panel-active")[0]) {
		document.getElementById("float").className = "float float-videos";
	}
}

const element = document.getElementById("tab");

element.addEventListener("click", tabClick, false);