import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    renderWeather(cityData) {
        // if (!cityData) {
        //     return;
        // }
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        // ES6 version:
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={ name }>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td> 
                    <Chart data={temps} color="orange" />
                </td>
                <td> 
                    <Chart data={pressures} color="blue" />
                </td>
                <td> 
                    <Chart data={humidities} color="black" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead> 
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
// ES6 way:
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);