import React, { useEffect, useState } from "react";
import * as Layout from "../../../layout";
import { IconDecorator } from "../../../hoc";
import introSteps from "./intros";
import { IIntroductionWrap } from "./interface";
import { useLocation } from "react-router-dom";
/**
 * This is a component that displays in sequences other components
 * that are a part of an introduction process for
 * the user. This includes asking user to play online
 * or through mobile app, signing in og signing up,
 * doing tutorial and so on.
 *
 * This component accepts a list of Component wrapped
 * by an object (interface) which helps this component
 * know which step of the tutorial should be shwon (if any)
 */
const Intro = () => {
	const [shouldShow, setShouldShow] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const NO_INTRO_PATHS = ["/um-okkur", "/skilmalar", "/vafrakokur"];
		setShouldShow(!NO_INTRO_PATHS.includes(location.pathname));
	}, [location]);

	const ICON_COUNT = 4;

	const [intros, setIntros] = useState<IIntroductionWrap[]>([]);

	useEffect(() => {
		setIntros(introSteps);
	}, []);

	const handleUpdate = () => setIntros([...intros]);

	const Found = intros.find((entry) => entry.shouldShow(entry.id));
	if (!Found || !shouldShow) return null;
	return (
		<Layout.BlurBackground>
			<IconDecorator iconCount={ICON_COUNT}>
				<Found.Component onComplete={handleUpdate} />
			</IconDecorator>
		</Layout.BlurBackground>
	);
};

export default Intro;
