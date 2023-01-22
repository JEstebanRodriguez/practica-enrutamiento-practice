import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, MultiParamPage, ParamPage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<HomePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path=':routeParam' element={<ParamPage />} />
				<Route
					path=':routeParam/:color1/:color2'
					element={<MultiParamPage />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
