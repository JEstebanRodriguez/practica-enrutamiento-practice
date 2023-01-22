import React from 'react'
import { useParams } from 'react-router-dom'

export const MultiParamPage = () => {
	const { routeParam, color1, color2 } = useParams()
	return (
		<div
			style={{
				width: '100%',
				textAlign: 'center',
				backgroundColor: color2,
				color: color1,
				border: '1px solid #000000'
			}}>
			{isNaN(+`${routeParam}`) ? (
				<p>The word is: {routeParam}</p>
			) : (
				<p>The number is: {routeParam}</p>
			)}
		</div>
	)
}
