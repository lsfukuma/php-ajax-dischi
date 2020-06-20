var $ = require('jquery');
const Handlebars = require('handlebars');

$(document).ready(function(){
    //handlebars per la card cd
    var source   = $('#cd-template').html();
	var template = Handlebars.compile(source);
    //compileSelect
    var template1 = Handlebars.compile($('#select-template').html());
    $('.select-artists').empty();
    $('.select-artists').append(template1({'artist': '--choose artist--'}));


    $.ajax({
        'url': '../public/database/dischi.php',
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
                $('.discs').append(template(context)); //handlebars per la card cd
                $('.select-artists').append(template1({'artist': author})) //handlebars per la select

            }
        },
        'error': function(){
            console.log('error');
        }
    });//fine chiamata ajax



}); //fine document

//bonus aggiungere una select con i nomi degli artisti che fungerà da filtro: quando viene selezionato un artista, recuperare gli album appropriati tramite una chiamata ajax
//il filtro per artista deve essere gestito lato backend, ciò significa che la richiesta ajax dovrebbe passare al php il nome dell'artista e il php si occcupa di filtrare i dischi. In altre parole, i dati che arrivano come risposta nella callback di success dovrebbero essere i dischi già filtrati per artista
