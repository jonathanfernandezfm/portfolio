import { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

interface State {
	width: number | undefined;
	height: number | undefined;
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState<State>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		setWindowDimensions(getWindowDimensions());

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
