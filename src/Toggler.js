import React from 'react'
import './Toggler.css'

function Toggler({ defaultStyle, setLat, setLong, setMapStyle }) {
	const styles = [
		{ name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-v9' },
		{ name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10' },
		{ name: 'Light', url: 'mapbox://styles/mapbox/light-v10' },
	]

	const buttons = styles.map((style, idx) => {
		return (
			<button
				key={idx}
				className={style.url === defaultStyle ? 'selected' : ''}
				onClick={() => setMapStyle(style.url)}
			>
				{style.name}
			</button>
		)
	})

	return <div className="toggler">{buttons}</div>
}

export default Toggler
