import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  constructor() {
    super();
    this.state = {
      showButton: true,
    };
  }

  disappearButton() {
    this.setState({
      showButton: false,
    });
  }

  renderWeather(cityData) {
    if (cityData.cod === '200') {
      const name = cityData.city.name;
      const id = cityData.city.id;

      return (
        <tr key={id} >
          <td>
            <div>{name}</div>
            <h6
              onClick={() => {
                this.disappearButton.bind(this);
                const toChange = JSON.parse(localStorage.nameForData);
                for (var i in toChange) {
                  if (toChange[i].city.name === name) {
                    toChange.splice(i, 1);
                    localStorage.nameForData = JSON.stringify(toChange);
                    this.forceUpdate();
                  }
                }
              }}
            >Delete</h6>
          </td>
          <td><h2>{cityData.list[0].main.temp}</h2></td>
          <td><h2>{cityData.list[0].main.pressure}</h2></td>
          <td><h2>{cityData.list[0].main.humidity}</h2></td>
        </tr>

    );
    }
  }


  render() {
    const n = JSON.parse(localStorage.getItem('nameForData'));
    return (
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {n.map(this.renderWeather, this)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
