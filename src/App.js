import React, { useState } from 'react'
import Map from './Map'
import Toggler from './Toggler'
import Search from './Search'

function App() {
	const [long, setLong] = useState(-43.18587)
	const [lat, setLat] = useState(-22.96688)
	const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/dark-v10')
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
