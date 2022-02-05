const createMap = function initMap() {
  const uovo = {lat: 34.02422007490653, lng: -118.49753104089724 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: uovo,
  });

  const marker = new.google.maps.Marker({
    position: uovo,
    map: map
  })
}

export {createMap};