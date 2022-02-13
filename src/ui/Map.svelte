<script lang="ts">
    import L from "leaflet";
    import {onMount} from "svelte";
    import { Geolocation } from '@capacitor/geolocation';
    import { addTripEndpoint, computeTripDistance, currentTrip } from "../app-state";
    import database from "../database";

    let carte;
    let trajetActuel;

    

    function createMap(container) {
        
        let m = L.map(container, {preferCanvas: true });
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA'
        }).addTo(m);
        m.setView([45.508888,-73.561668], 14);
        return m;
    }

    function createMarker(loc: number[], icon) {
		// let count = Math.ceil(Math.random() * 25);
		// let icon = markerIcon(count);
		let marker = L.marker(loc, {icon});
		// bindPopup(marker, (m) => {
		// 	let c = new MarkerPopup({
		// 		target: m,
		// 		props: {
		// 			count
		// 		}
		// 	});
			
		// 	c.$on('change', ({detail}) => {
		// 		count = detail;
		// 		marker.setIcon(markerIcon(count));
		// 	});
			
		// 	return c;
		// });
		
		return marker;
	}

    function mapAction(container) {
        carte = createMap(container); 
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
                carte.remove();
                carte = null;
            }
        };
	}

    function resizeMap() {
	    if(carte) { 
            carte.invalidateSize(); }
    }

    async function initTrip() {
        if(carte) {
            var position = await Geolocation.getCurrentPosition()
            var geopoint = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            L.circleMarker([geopoint.latitude, geopoint.longitude], 
            {
                color: "red",
                weight: 2,
                opacity: 0.7
            }).addTo(carte);
            trajetActuel = L.polyline([geopoint.latitude, geopoint.longitude],
            {
                color: "red",
                weight: 3,
                opacity: 0.5,
                smoothFactor: 1
            });
            trajetActuel.addTo(carte);
        }
    }

    function endTrip() {
        var trip: Trip = {...$currentTrip, distance:computeTripDistance($currentTrip.geopoints), endTime: $currentTrip.geopoints[$currentTrip.geopoints.length-1].timestamp };
        database.updateTrip(trip);
        currentTrip.set(null);
    }

    function resumeCurrentTrip() {
        if(carte) {
            var pointList = $currentTrip.geopoints
                .sort((a, b) => a.timestamp < b.timestamp ? -1 : 1)
                .map( x => [x.location.latitude, x.location.longitude]);
            var origin = pointList[0];
            console.log(origin)
            L.circleMarker(origin, 
            {
                color: "red",
                weight: 2,
                opacity: 0.7
            }).addTo(carte);
            trajetActuel = L.polyline(pointList,
            {
                color: "red",
                weight: 3,
                opacity: 0.5,
                smoothFactor: 2
            });
            trajetActuel.addTo(carte);
        }
    }

    async function updateTrip() {
        if($currentTrip.geopoints.length == 0) {
            initTrip()
        }
        var position = await Geolocation.getCurrentPosition()
        var geopoint = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        addTripEndpoint(geopoint);
        trajetActuel.addLatLng([geopoint.latitude, geopoint.longitude]);
    }

    onMount(() => {
            setInterval(() => {
                if($currentTrip) {
                    updateTrip();
                }
            }, 3000);
            setTimeout(
                async () => {
                    const initialView = await Geolocation.getCurrentPosition();
                    carte.setView([ initialView.coords.latitude, initialView.coords.longitude]);
                    console.log($currentTrip)
                    if($currentTrip?.geopoints.length) {
                        resumeCurrentTrip();
                    }
                    resizeMap();
                },
            300);
        }
       
    )

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



<div class="map" style="height:100%;width:100%;" use:mapAction >
    {#if $currentTrip.geopoints.length}
    <div class="leaflet-bottom">
        <ion-fab-button on:click={endTrip()} style="pointer-events: auto;">
            <ion-icon name="close"></ion-icon>
        </ion-fab-button>
    </div>
    {:else}
    <div class="leaflet-bottom">
        <ion-fab-button on:click={initTrip()} style="pointer-events: auto;">
            <ion-icon name="add"></ion-icon>
        </ion-fab-button>
    </div>
    {/if}
</div>
