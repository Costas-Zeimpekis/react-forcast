import React, { Component } from 'react';

import SearchBar from '../constainers/search_bar';
import WeatherList from '../constainers/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}