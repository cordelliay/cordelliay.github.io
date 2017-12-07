$(function() { 
   $(".toolgif").toolgif(); 

});
var wrapper = document.querySelector('.svg-animation');

window.onscroll = function (event) {
  if (wrapper.getElementById = "draw") {
    wrapper.className = "on";
    window.onscroll = null;
  }
};

var skills = [];
var tech =['#tech', ["CSS3", "HTML5", "MySQL", "PHP", "XML", "JSON", "JQuery", "Javascript", "Propel ORM", "SASS / SCSS", "AngularJS", "Twig", "Highcharts", "Slim Framework", "Memcache", "Bootstrap", "Foundation"]];
var api = ['#api', ["Altmetrics","Scopus","MailChimp","Asana","YouTube"]];
var seo = ['#seo', ["Google Analytics","Google Tag Manager","Google Optimize","Webmaster Tools","MozPro"]];
var other =['#other', ["Filemaker","Bookmaster by Iptor","STATA","Tableau","Neon","AllBooks","Microsoft Access","Google Analytics","Google Tag Manager","Google Optimize",]];
skills.push(tech, api, other);

for (var i = skills.length - 1; i >= 0; i--) {
	var id =  skills[i][0];
	var items = skills[i][1];
	for (var c = 0; c < items.length; c++) {
		$(id).append("<li>"+items[c]+"</li>");
	}
}

	


