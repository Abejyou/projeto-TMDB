const API_KEY = "aef11be5dd8a1db84d60a8f6dedc405f";

getpopularMovies = function () {
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=pt-BR&page=1", function (data) {
        for (var i in data.results) {
            var item = data.results[i];
            var clone = $('[clone=listaFilme]').clone();
            clone.attr("clone", "");
            clone.removeClass("hidden");
            clone.find(".mdl-card__supporting-text").html("<b>"+item.title+"</b><p>"+item.overview+"</p>");
            clone.find(".mdl-card__title").css("background" , "url('https://image.tmdb.org/t/p/w500"+item.poster_path+"') center / cover");
            $('[content=listaFilme]').append(clone);
            
        }
    });
};

getpopularMovies();