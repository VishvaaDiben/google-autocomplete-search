import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React from 'react';

const Map = ({ center, zoom, places }) => {
  const renderMarkers = (map, maps) => {
    const markers = places.map(place => {
      const marker = new maps.Marker({
        position: { lat: place.geometry.location.lat, lng: place.geometry.location.lng },
        map,
        title: place.name,
      });
      return marker;
    });
    return markers;
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          renderMarkers(map, maps);
        }}
      />
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  zoom: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object),
};

Map.defaultProps = {
  center: {
    lat: 37.774929,
    lng: -122.419416,
  },
  zoom: 11,
  places: [],
};

export default Map;
