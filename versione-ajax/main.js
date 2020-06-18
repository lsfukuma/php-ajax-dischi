$(document).ready(function(){

    var source   = $('#cd-template').html();
	var template = Handlebars.compile(source);
    $.ajax({
        'url': 'database/dischi.php',
        'method': 'GET',
        'success': function(discs){
            //ciclo for per recuperare ogni array con le info di ogni disco
            for (var i = 0; i < discs.length; i++) {
                var disc = discs[i]
                var author = disc.author;
                console.log(author);
                var genre = disc.genre;
                var poster = disc.poster;
                var title = disc.title;
                var year = disc.year;
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
