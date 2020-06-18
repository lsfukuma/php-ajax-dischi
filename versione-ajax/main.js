// var $ = require('jquery');
$(document).ready(function(){

    var source   = $('#cd-template').html();
	var template = Handlebars.compile(source);
    $.ajax({
        'url': 'database/dischi.php',
        'method': 'GET',
        'success': function(discs){
            //ciclo for per recuperare ogni array con le info di ogni disco
            for (var i = 0; i < discs.length; i++) {
                var author = discs[i].author;
                var genre = discs[i].genre;
                var poster = discs[i].poster;
                var title = discs[i].title;
                var year = discs[i].year;
                //handlebars context
                var context = {
                    'image': poster,
                    'song': title,
                    'singer': author,
                    'type-music': genre,
                    'released': year
                }
                var html = template(context);
                $('.discs').append(html);
            }
        },
        'error': function(){
            console.log('error');
        }
    });//fine chiamata ajax
}); //fine document
