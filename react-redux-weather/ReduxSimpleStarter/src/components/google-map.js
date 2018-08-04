import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // this.refs.map -> react provides a direct reference to the rendered html element
        return <div ref="map" />
    }
}

export default GoogleMap;