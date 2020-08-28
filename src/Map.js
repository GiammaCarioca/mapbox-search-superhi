import React, { useState, useEffect } from 'react'
import mapbox from 'mapbox-gl'
import PlacesPanel from './PlacesPanel'
import './Map.css'

require('dotenv').config()

function Map({ long, lat, mapStyle, places }) {
	const [map, setMap] = useState({})

	useEffect(() => {
		mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

		const map = new mapbox.Map({
			container: 'map',
			style: mapStyle,
			center: [long, lat],
			zoom: 12,
		})

		const navigationControl = new mapbox.NavigationControl()

		if (!map) return

		map.addControl(navigationControl)
		setMap(map)
	}, [lat, long, mapStyle])

	return (
		<div id="map">
			<PlacesPanel places={places} map={map}></PlacesPanel>
		</div>
	)
}

export default Map
