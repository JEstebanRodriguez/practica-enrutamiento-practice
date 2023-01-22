import React from 'react'
import { useParams } from 'react-router-dom'

export const ParamPage = () => {
	const { routeParam } = useParams()
	return isNaN(+`${routeParam}`) ? (
		<h1>The word is: {routeParam}</h1>
	) : (
		<h1>The number is: {routeParam}</h1>
	)
}
