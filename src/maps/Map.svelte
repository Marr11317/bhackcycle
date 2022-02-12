<script>

    import L from "leaflet";
    //import { Geolocation } from '@capacitor/geolocation';

    let map;

    const initialView = [45.5016889, -73.567256];

    function createMap(container) {
        let m = L.map(container, {preferCanvas: true });
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA'
        }).addTo(m);
        m.setView(initialView, 14);
        m.invalidateSize();
        return m;
    }

    function mapAction(container) {
        map = createMap(container); 
        // toolbar.addTo(map);
        
        // markerLayers = L.layerGroup()
        // for(let location of markerLocations) {
        //     let m = createMarker(location);
        //     markerLayers.addLayer(m);
        // }
        
        // lineLayers = createLines();
        
        // markerLayers.addTo(map);
        // lineLayers.addTo(map);
        map.invalidateSize();
        return {
        destroy: () => {
                // toolbar.remove();
                map.remove();
                map = null;
            }
        };
	}

    function resizeMap() {
	    if(map) { map.invalidateSize(); }
    }

</script>

<svelte:window on:resize={resizeMap} />

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""
  />
</svelte:head>

<style>
	.map :global(.marker-text) {
		width:100%;
		text-align:center;
		font-weight:600;
		background-color:#444;
		color:#EEE;
		border-radius:0.5rem;
	}
	
	.map :global(.map-marker) {
		width:30px;
		transform:translateX(-50%) translateY(-25%);
	}
</style>



<div class="map" style="height:100%;width:100%;" use:mapAction />