import React, { useState, useEffect } from 'react'
import mapbox from 'mapbox-gl'
import PlacesPanel from './PlacesPanel'
import './Map.css'

function Map({ long, lat, mapStyle, places }) {
	const [map, setMap] = useState({})

	useEffect(() => {
		mapbox.accessToken =
			'pk.eyJ1IjoiZ2lhbW1hY2FyaW9jYSIsImEiOiJjamh5enQyODcwczJhM3FtcWZ4MWFtZWkzIn0.WYElwcfpht5zjidLQHk5EQ'

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
