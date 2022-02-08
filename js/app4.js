
for (var i = 1; i <= 6; i++) {
    $( `#video${i}`).click(function(){
        var video = '<iframe class="col-lg-4 mb-4 bordes-video" width="250" height="175" src="'+ $(this).attr('data-video') +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen allow="autoplay"></iframe>';
        $(this).replaceWith(video);
    });
 }

 setTimeout(()=>{ 
    var mapa= '<iframe class=" col-12 my-5 altura-celu " src="'+ $('#mapa').attr('data-mapa') +'" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    $('#mapa').replaceWith(mapa); 
}, 2000);



 