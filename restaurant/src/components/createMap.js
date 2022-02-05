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

// const addScript = function (src, callback) {
//     var s = document.createElement("script");
//     s.setAttribute("src", src);
//     s.onload = callback;
//     return s;
// };

const buildMap = function () {
    var script = document.createElement("script");
    script.text = createMap;
    document.head.appendChild(script);

    let apiKey = "AIzaSyDHbrkqTmxNmG0a1o5ht5TId-u37Ph4tRA";
    let src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    let s = document.createElement("script");
    s.setAttribute("src", src);
    s.async = true;

    return s;
};

export { buildMap };
