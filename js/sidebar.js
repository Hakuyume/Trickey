$(function(){
    $('.sidebar').append('<h2>最新ニュース30件</h2>');
    $('.sidebar').append('<ul></ul>');
    $.getJSON('articles.json', function(articles){
	articles.forEach(function(entry){
	    $('.sidebar ul').append(
		'<li><a href="'
		    + entry.name
		    + '.html" target="_top">'
		    + entry.title
		    + '<\/a><\/li>'
	    );
	});
    });
 });
