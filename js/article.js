$(function(){
    var name = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.length);
    name = name.substring(0, name.indexOf('.'));

    $.getJSON('articles.json', function(articles){
	var article = articles.filter(function(entry){return entry.name == name;})[0];

	document.title += ' - ' + article.title;

	$('article').prepend(
	    '<span class="date">2015年01月22日 13時00分00秒</span><h1 class="title">'
		+ article.title
		+ '</h1><figure class="thumb"><img src="images/'
		+ article.thumb
		+ '"></figure>'
	);

	$('.related').append('<h2>関連記事</h2>');
	$('.related').append('<ul></ul>');
	articles.forEach(function(entry){
	    if (entry != article){
		$('.related ul').append(
		    '<li><a href="'
			+ entry.name
			+ '.html" target="_blank">'
			+ entry.title
			+ '- MECHAZINE</a></li>'
		);
	    }
	});
    });
});
