import React from 'react'
import mapbox from 'mapbox-gl'

function PlaceItem({ place, map }) {
	const goTo = () => {
		map.flyTo({ center: [place.longitude, place.latitude], zoom: 10 })
	}

	if (!map) return

	const popup = new mapbox.Popup({
		closeButton: false,
	})

	popup.setHTML(place.name)

	const marker = new mapbox.Marker({
		color: '#2727e6',
	})

	marker.setLngLat([place.longitude, place.latitude])
	marker.setPopup(popup)

	marker.addTo(map)

	return (
		<div className="place-item" onClick={() => goTo()}>
			{place.name} ({place.latitude},{place.longitude})
		</div>
	)
}

export default PlaceItem
