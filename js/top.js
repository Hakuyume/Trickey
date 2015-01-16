$(function(){
    $.getJSON('articles.json', function(articles){
	document.title += ' - ' + articles[0].title;
	articles.forEach(function(entry){
	    $('.thumb').append(
		'<li><a href="'
		    + entry.name
		    + '.html"><span class="date">2015年01月22日 13時00分00秒</span> <span class="tag">ハードウェア</span><figure><img src="images/'
		    + entry.thumb
		    + '"></figure><h1 class="title">'
		    + entry.title
		    + '</h1></a></li>'
	    );
	});
    });
 });