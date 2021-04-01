import React from "react";
import PropTypes from "prop-types";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

MapGG.propTypes = {};

const WrappedMap = withScriptjs(withGoogleMap(MapGG));
function MapGG(props) {
    return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 16.054407, lng: 108.202164 }} />;
}

export default function MapMain() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBUzV9wTlupd8Lrn9akJdfJqOHy6AIuKes`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
