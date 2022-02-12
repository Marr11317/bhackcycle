<script>

    import L from "leaflet";

    const initialView = [39.8283, -98.5795];

    function createMap(container) {
        let map = L.map(container, {preferCanvas: true }).setView(initialView, 5);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA'
        }).addTo(map);
        return map;
    }

    function mapAction(container) {
        var map = createMap(container); 
            // toolbar.addTo(map);
            
            // markerLayers = L.layerGroup()
            // for(let location of markerLocations) {
            //     let m = createMarker(location);
            //     markerLayers.addLayer(m);
            // }
            
            // lineLayers = createLines();
            
            // markerLayers.addTo(map);
            // lineLayers.addTo(map);
            
        return {
        destroy: () => {
                    // toolbar.remove();
                    map.remove();
                    map = null;
                }
        };
	}

</script>


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

<div class="map" style="height:100%;width:100%" use:mapAction />