import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({ width: undefined, height: undefined });

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
			console.log(window);
		}

		setWindowDimensions(getWindowDimensions());

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
