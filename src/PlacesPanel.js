import React from 'react'
import PlaceItem from './PlaceItem'
import './PlacesPanel.css'

function PlacesPanel({ places, map }) {
	let placeItems = <div className="no-results">Nothing added yet</div>

	if (places.length > 0) {
		placeItems = places.map((place, idx) => {
			return <PlaceItem key={idx} place={place} map={map}></PlaceItem>
		})
	}

	return <div className="places">{placeItems}</div>
}

export default PlacesPanel
