const createMap = function initMap() {
    // window.initMap = initMap;
    const uovo = { lat: 34.016050923377136, lng: -118.49753104089724 };
    const map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 15,
        center: uovo,
    });

    const marker = new google.maps.Marker({
        position: uovo,
        map: map,
    });
};

const buildMap = function () {
    // adding callback script to head
    var script = document.createElement("script");
    script.text = createMap;
    document.head.appendChild(script);

    // sending request to google API endpoint
    let apiKey = "AIzaSyDHbrkqTmxNmG0a1o5ht5TId-u37Ph4tRA";
    let src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    let s = document.createElement("script");
    s.setAttribute("src", src);
    s.async = true;

    return s;
};

export { buildMap };
