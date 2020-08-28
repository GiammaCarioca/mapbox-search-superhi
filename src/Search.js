import React, { useState } from 'react'
import './Search.css'

function Search({ places, setPlaces }) {
	const [value, setValue] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const accessToken =
			'pk.eyJ1IjoiZ2lhbW1hY2FyaW9jYSIsImEiOiJjamh5enQyODcwczJhM3FtcWZ4MWFtZWkzIn0.WYElwcfpht5zjidLQHk5EQ'

		const url = `https:/api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${accessToken}`

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const firstResult = data.features[0]

				const oldPlaces = [
					...places,
					{
						name: value,
						longitude: firstResult.center[0],
						latitude: firstResult.center[1],
					},
				]

				setPlaces(oldPlaces)
				setValue('')
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Add place..."
			/>
		</form>
	)
}

export default Search
