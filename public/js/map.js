var MapRouting = (function () {

return{

  loadMapRouting: function(local_destino, local_origem) {

    if(local_destino === "redondo"){
      if(local_origem === "ginásio"){

        var redondoPonto6 = new google.maps.LatLng(-29.79482006, -51.15480757);
        var caminhoPonto4 = new google.maps.LatLng(-29.795253, -51.15375614);
        var ruaPonto5 = new google.maps.LatLng(-29.7972501, -51.15319824);
        var ruaPonto4 = new google.maps.LatLng(-29.797035, -51.152301);
        var ginasio = new google.maps.LatLng(-29.797340, -51.152206);

        var mapCanvas = document.getElementById("map");
        var mapOptions = { center: caminhoPonto4, zoom: 17 };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    
        var flightPath = new google.maps.Polyline({
          path: [redondoPonto6, caminhoPonto4, ruaPonto5, ruaPonto4, ginasio],
          strokeColor: "#00B4A0",
          strokeOpacity: 1.0,
          strokeWeight: 5
        });
        flightPath.setMap(map);
    
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    
        var marker = new google.maps.Marker({ position: ginasio });
        marker.setMap(map);
        var marker2 = new google.maps.Marker({ position: redondoPonto6, animation: google.maps.Animation.BOUNCE });
        marker2.setMap(map);
    
        var infowindow = new google.maps.InfoWindow({
          content: "Você está aqui"
        });
        infowindow.open(map, marker);
        var infowindow2 = new google.maps.InfoWindow({
          content: "Destino final"
        });
        infowindow2.open(map, marker2);

      }
    }

    if(local_destino === "fratello"){
      if(local_origem === "D09104"){

        var fratello = new google.maps.LatLng(-29.795855, -51.153700);
        var ruaCentralPonto09 = new google.maps.LatLng(-29.795835, -51.153600);
        var ruaCentralPonto10 = new google.maps.LatLng(-29.796098, -51.153520);
        var D09104 = new google.maps.LatLng(-29.795738, -51.151866);
    
        var mapCanvas = document.getElementById("map");
        var mapOptions = { center: D09104, zoom: 18 };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    
        var flightPath = new google.maps.Polyline({
          path: [fratello, ruaCentralPonto09, ruaCentralPonto10, D09104],
          strokeColor: "#00B4A0",
          strokeOpacity: 1.0,
          strokeWeight: 5
        });
        flightPath.setMap(map);
    
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    
        var marker = new google.maps.Marker({ position: D09104 });
        marker.setMap(map);
        var marker2 = new google.maps.Marker({ position: fratello, animation: google.maps.Animation.BOUNCE });
        marker2.setMap(map);
    
        var infowindow = new google.maps.InfoWindow({
          content: "Você está aqui"
        });
        infowindow.open(map, marker);
        var infowindow2 = new google.maps.InfoWindow({
          content: "Destino final"
        });
        infowindow2.open(map, marker2);

      }
    }

  }

};

})();