<template>
    <div ref="map" class="map-container"></div>
  </template>
  
  <script>
  import mapboxgl from 'mapbox-gl';
  
  export default {
    name: 'winterMap',
    data() {
      return {
        map: null,
        mapboxToken: 'pk.eyJ1IjoibmJsYXNsZXkiLCJhIjoiY2x0Y2dmcGdiMjJ1NjJqcGQyMWhmODZ5ZCJ9.bDMq7X1x_fXsHWpcZppPAA', // Mapbox API access token
        customStyleURL: 'mapbox://styles/nblasley/cltc81vh100mt01ra5pqre2oy', // my custom Mapbox style URL
      };
    },
    mounted() {
      // Initialize the map
      mapboxgl.accessToken = this.mapboxToken;
      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: this.customStyleURL, // Use your custom style URL here
        center: [-120.771, 47.409], // Set the initial center of the map based on the x,y coordinate pair.
        zoom: 7.35, // Set the initial map zoom level here
      });
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 400px; /* height set to 400px but adjust as needed */
  }
  </style>
  