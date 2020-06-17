$(document).ready(function(){
    $.ajax({
        'url': 'dischi.php',
        'method': 'GET',
        'success': function(discs){
            //ciclo for per recuperare i $dischi
            for (var i = 0; i < discs.length; i++) {
                console.log(discs);
            }
        },
        'error': function(){
            console.log('error');
        }
    });//fine chiamata ajax
}); //fine document
