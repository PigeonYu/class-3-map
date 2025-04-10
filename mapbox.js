
mapboxgl.accessToken = 'pk.eyJ1IjoieXV0b25nNTA1IiwiYSI6ImNtOWJ0b2xvNTBqMXYyanB2ZThobGFzcHIifQ.KSxcqT9gKPhoNz2TgnA8HAYOUR_MAPBOX_ACCESS_TOKEN';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.9909, 40.7333],
    zoom: 12
});


const bookstores = {
    mcnally: {
        id: 'mcnally-btn',
        name: "McNally Jackson",
        coords: [-73.9965, 40.7233],
        description: "📚 Located in SoHo, McNally Jackson is a beloved indie bookstore with an in-house café."
    },
    strand: {
        id: 'strand-btn',
        name: "Strand Bookstore",
        coords: [-73.9909, 40.7333],
        description: "📖 Known for its '18 miles of books', Strand is a NYC classic!"
    },
    rizzoli: {
        id: 'rizzoli-btn',
        name: "Rizzoli Bookstore",
        coords: [-73.9774, 40.7455],
        description: "🎨 Rizzoli specializes in illustrated books and foreign literature. A true cultural gem."
    }
};


Object.keys(bookstores).forEach(key => {
    const store = bookstores[key];

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${store.name}</h3><p>${store.description}</p>`
    );

    const marker = new mapboxgl.Marker()
        .setLngLat(store.coords)
        .setPopup(popup)
        .addTo(map);


    const btn = document.getElementById(store.id);
    if (btn) {
        btn.addEventListener('click', () => {
            map.flyTo({ center: store.coords, zoom: 15 });
            popup.addTo(map);
        });
    }
});
