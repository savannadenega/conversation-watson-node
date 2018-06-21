(function () {
    
    console.log("loadMyFirstMap");
    
    const script = document.createElement('script');
    script.src = `//maps.googleapis.com/maps/api/js?key=AIzaSyCoU8iJE6dQ-Saao8PHEoaoJoksnkGeDwc`;
    script.async = true;
    script.onload = function(){

        console.log("estou dentro da funcao do loadFirstMap");
        var unisinosCentro = new google.maps.LatLng(-29.795253, -51.15375614);

        var mapCanvas = document.getElementById("map");
        var mapOptions = { center: unisinosCentro, zoom: 16 };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

    }
    document.body.append(script);

})();