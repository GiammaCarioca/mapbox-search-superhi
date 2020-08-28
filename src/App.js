import React, { useState } from 'react'
import Map from './Map'
import Toggler from './Toggler'
import Search from './Search'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [long, setLong] = useState(-74.006)
	// eslint-disable-next-line no-unused-vars
	const [lat, setLat] = useState(40.7128)
	// eslint-disable-next-line no-unused-vars
	const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/dark-v10')
	// eslint-disable-next-line no-unused-vars
	const [places, setPlaces] = useState([])

	return (
		<div className="App">
			<Search places={places} setPlaces={setPlaces}></Search>
			<Toggler
				setLat={setLat}
				setLong={setLong}
				setMapStyle={setMapStyle}
				defaultStyle={mapStyle}
			></Toggler>
			<Map long={long} lat={lat} mapStyle={mapStyle} places={places}></Map>
		</div>
	)
}

export default App
