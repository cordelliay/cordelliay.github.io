AOS.init();
$(function() {

    $(".toolgif").toolgif();

var skills = [];
var tech = ['#tech', ["MySQL", "PHP", "CSS3", "HTML5", "XML", "JSON", "JQuery", "Javascript", "Propel ORM", "SASS / SCSS", "AngularJS", "Twig", "Slim Framework", "Bootstrap", "Foundation"]];
var api = ['#api', ["Altmetrics", "Scopus", "MailChimp", "Asana", "YouTube", "Google Analytics", "Highcharts"]];
var seo = ['#seo', ["Google Analytics", "Google Tag Manager", "Google Optimize", "Webmaster Tools", "MozPro"]];
var other = ['#other', ["Filemaker", "STATA", "Tableau", "AllBooks", "Data Studio", "Google Tag Manager", "Google Optimize", ]];
skills.push(tech, api, other);

for (var i = skills.length - 1; i >= 0; i--) {
    var id = skills[i][0];
    var items = skills[i][1];
    for (var c = 0; c < items.length; c++) {
        $(id).append("<li>" + items[c] + "</li>");
    }

}
 
});